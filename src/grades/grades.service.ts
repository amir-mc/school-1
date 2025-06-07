import { Injectable } from '@nestjs/common';
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
}
