import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
// schedules.service.ts
@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ScheduleCreateInput) {
    return this.prisma.schedule.create({ data });
  }

  findAll() {
    return this.prisma.schedule.findMany({ include: { class: true } });
  }

  findByClass(classId: string) {
    return this.prisma.schedule.findMany({
      where: { classId },
    });
  }

  update(id: string, data: Prisma.ScheduleUpdateInput) {
    return this.prisma.schedule.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.schedule.delete({ where: { id } });
  }
  async getTeacherSchedules(userId: string) {
  const teacher = await this.prisma.teacher.findUnique({
    where: { userId },
    include: {
      classes: {
        include: {
          schedules: true,
        },
      },
    },
  });

  if (!teacher) return { message: 'معلم یافت نشد' };

  return {
    message: 'برنامه کلاس‌های تدریس‌ شده',
    data: teacher.classes.flatMap(cls => cls.schedules),
  };
}

async getStudentSchedule(userId: string) {
  const student = await this.prisma.student.findUnique({
    where: { userId },
    include: {
      class: {
        include: { schedules: true },
      },
    },
  });

  if (!student) return { message: 'دانش‌آموز یافت نشد' };

  return {
    message: 'برنامه هفتگی دانش‌آموز',
    data: student.class.schedules,
  };
}
}


