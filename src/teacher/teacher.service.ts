// src/teacher/teacher.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() 
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async createTeacher(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundException('کاربر یافت نشد');
    if (user.role !== 'TEACHER') {
      throw new BadRequestException('نقش کاربر باید TEACHER باشد');
    }

    return this.prisma.teacher.create({
      data: {
        userId,
      },
    });
  }

  getAllTeachers() {
    return this.prisma.teacher.findMany({
      include: { user: true },
    });
  }

  getTeacherById(id: string) {
    return this.prisma.teacher.findUnique({
      where: { id },
      include: { user: true, classes: true },
    });
  }

  deleteTeacher(id: string) {
    return this.prisma.teacher.delete({ where: { id } });
  }
   async getTeachersForClassSelection() {
    return this.prisma.teacher.findMany({
      select: {
        id: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        user: {
          name: 'asc'
        }
      }
    });
  }

  async validateTeachers(teacherIds: string[]) {
    const existingTeachers = await this.prisma.teacher.count({
      where: { 
        id: { in: teacherIds } 
      }
    });
    
    if (existingTeachers !== teacherIds.length) {
      throw new NotFoundException('یک یا چند معلم یافت نشدند');
    }
    return true;
  }
}
