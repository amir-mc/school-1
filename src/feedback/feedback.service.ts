// src/feedback/feedback.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async create(parentId: string, dto: CreateFeedbackDto) {
    const teacher = await this.prisma.teacher.findUnique({
      where: { id: dto.teacherId },
    });

    if (!teacher) throw new NotFoundException('معلم یافت نشد');

    return this.prisma.feedback.create({
      data: {
        parentId,
        teacherId: dto.teacherId,
        score: dto.score,
        comment: dto.comment,
      },
    });
  }

  async getTeacherFeedback(teacherId: string) {
    return this.prisma.feedback.findMany({
      where: { teacherId },
      include: {
        parent: {
          select: { user: { select: { name: true } } },
        },
      },
    });
  }
}
