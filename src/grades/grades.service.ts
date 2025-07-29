import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GradesService {
  constructor(private prisma: PrismaService) {}

  async giveGrade(dto: {
    studentId: string;
    teacherId: string;
    subject: string;
    score: number;
  }) {
    return this.prisma.grade.create({
      data: {
        studentId: dto.studentId,
        
        subject: dto.subject,
        value: dto.score,
      },
    });
  }

  async getStudentGrades(studentId: string) {
    return this.prisma.grade.findMany({
      where: { studentId },
    });
  }

  async addGrade(data: { studentId: string; subject: string; value: number }) {
  return this.prisma.grade.create({
    data,
  });
}

async updateGrade(gradeId: string, data: { value?: number; subject?: string }) {
  return this.prisma.grade.update({
    where: { id: gradeId },
    data,
  });
}
async deleteGrade(gradeId: string) {
  return this.prisma.grade.delete({
    where: { id: gradeId },
  });
}
async getGradesByStudent(studentId: string) {
  return this.prisma.grade.findMany({
    where: { studentId },
    include: {
      student: {
        include: {
          user: true,
          class: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
async getAllGrades() {
  return this.prisma.grade.findMany({
    include: {
      student: {
        include: {
          user: true,
          class: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
async getGradesByStudentUserId(userId: string) {
  const student = await this.prisma.student.findUnique({
    where: {
      userId, // چون student به user وصل شده
    },
    include: {
      grades: true,
    },
  });

  if (!student) {
    throw new NotFoundException('دانش‌آموز یافت نشد');
  }

  return student.grades;
}
}
