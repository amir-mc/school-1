import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

 async getMyGrades(userId: string) {
  const student = await this.prisma.student.findUnique({
    where: { userId },
    include: {
      grades: true,
      user: true,
    },
  });

  if (!student) {
    throw new NotFoundException('دانش‌آموز یافت نشد');
  }

  return {
    message: 'نمرات دانش‌آموز با موفقیت دریافت شد',
    data: student.grades.length > 0
      ? student.grades
      : 'هنوز نمره‌ای برای شما ثبت نشده است',
  };
}

}
