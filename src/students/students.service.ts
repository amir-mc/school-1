import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async createStudent(dto: {
    userId: string;
    classId: string;
    parentId: string;
  }) {
    return this.prisma.student.create({
      data: {
        userId: dto.userId,
        classId: dto.classId,
        parentId: dto.parentId,
      },
    });
  }

  async getAll() {
    return this.prisma.student.findMany({
      include: {
        user: true,
        parent: { include: { user: true } },
        class: true,
      },
    });
  }
}
