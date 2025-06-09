// src/class/class.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  createClass(data: { name: string; grade: number }) {
    return this.prisma.class.create({ data });
  }

  getAllClasses() {
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
