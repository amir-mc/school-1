import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  async assignToClass(dto: { teacherId: string; classId: string }) {
    return this.prisma.class.update({
      where: { id: dto.classId },
      data: {
        teachers: {
          connect: { id: dto.teacherId },
        },
      },
    });
  }

  async getAll() {
    return this.prisma.teacher.findMany({
      include: {
        user: true,
        classes: true,
      },
    });
  }
}
