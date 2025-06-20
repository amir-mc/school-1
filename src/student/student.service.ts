// src/student/student.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async createStudent(userId: string, parentId: string, classId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const parent = await this.prisma.parent.findUnique({ where: { id: parentId } });
    const classObj = await this.prisma.class.findUnique({ where: { id: classId } });

    if (!user) throw new NotFoundException('کاربر پیدا نشد');
    if (!parent) throw new NotFoundException('والد پیدا نشد');
    if (!classObj) throw new NotFoundException('کلاس پیدا نشد');

    return this.prisma.student.create({
      data: {
        userId,
        parentId,
        classId,
      },
    });
  }

  getAllStudents() {
    return this.prisma.student.findMany({
      include: {
        user: true,
        class: true,
        parent: {
          include: { user: true },
        },
      },
    });
  }
}
