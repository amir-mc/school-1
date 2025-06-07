import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async setSchedule(dto: {
    classId: string;
    day: string;
    subject: string;
    startTime: string;
    endTime: string;
  }) {
    return this.prisma.schedule.create({
      data: dto,
    });
  }

  async getSchedule(classId: string) {
    return this.prisma.schedule.findMany({
      where: { classId },
      orderBy: { day: 'asc' },
    });
  }
}
