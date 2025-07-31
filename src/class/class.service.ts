// src/class/class.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}


  async addTeacherToClass(classId: string, teacherId: string) {
      const cls = await this.prisma.class.findUnique({ where: { id: classId } });
  const teacher = await this.prisma.teacher.findUnique({ where: { id: teacherId } });

  if (!cls) throw new Error('کلاس مورد نظر یافت نشد');
  if (!teacher) throw new Error('معلم مورد نظر یافت نشد');
  return this.prisma.class.update({
    where: { id: classId },
    data: {
      teachers: {
        connect: { id: teacherId },
      },
    },
  });
}

// حذف معلم از کلاس
async removeTeacherFromClass(classId: string, teacherId: string) {
  return this.prisma.class.update({
    where: { id: classId },
    data: {
      teachers: {
        disconnect: { id: teacherId },
      },
    },
    include: {
      teachers: { include: { user: true } },
    },
  });
}

async createClass(data: { name: string; grade: number; teacherIds?: string[] }) {
  const { name, grade, teacherIds } = data;
  
  // Verify all teacher IDs exist before creating the class
  if (teacherIds?.length) {
    const existingTeachers = await this.prisma.teacher.count({
      where: { id: { in: teacherIds } }
    });
    
    if (existingTeachers !== teacherIds.length) {
      throw new BadRequestException('یک یا چند معلم یافت نشدند');
    }
  }

  return this.prisma.class.create({
    data: {
      name,
      grade,
      teachers: teacherIds?.length
        ? { connect: teacherIds.map(id => ({ id })) }
        : undefined,
    },
    include: {
      teachers: { include: { user: true } },
    },
  });
}

    async  getAllClasses() {
        return this.prisma.class.findMany({
          include: {
            students: {
              include: { user: true },
            },
            teachers: {
              include: { user: true },
            },
            schedules: true,
          },
        });
      }

      async addStudentToClass(classId: string, studentId: string) {
  return this.prisma.student.update({
    where: { id: studentId },
    data: { classId },
    include: {
      user: true,
      class: true,
    },
  });
}

  getClassById(id: string) {
    return this.prisma.class.findUnique({
      where: { id },
      include: {
        students: {
          include: { user: true },
        },
        teachers: {
          include: { user: true },
        },
        schedules: true,
      },
    });
  }

 updateClass(id: string, data: { name?: string; grade?: number }) {
  return this.prisma.class.update({
    where: { id },
    data,
  });
}

  deleteClass(id: string) {
    return this.prisma.class.delete({ where: { id } });
  }
}
