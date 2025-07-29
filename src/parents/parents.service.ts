import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParentsService {
  constructor(private prisma: PrismaService) {}
  async getChildrenGrades(userId: string) {
  const parent = await this.prisma.parent.findUnique({
    where: { userId },
    include: {
      students: {
        include: {
          grades: true,
          user: true,
        },
      },
    },
  });

  if (!parent) {
    throw new NotFoundException('والد یافت نشد');
  }

  if (parent.students.length === 0) {
    return {
      message: 'هیچ فرزندی برای این والد ثبت نشده است',
      data: [],
    };
  }

  return {
    message: 'نمرات فرزندان با موفقیت دریافت شد',
    data: parent.students.map(student => ({
      studentId: student.id,
      studentName: student.user.name,
      grades: student.grades.length > 0 ? student.grades : 'نمره‌ای ثبت نشده است',
    })),
  };
}

}