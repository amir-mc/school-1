import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  getProfile(userId: string) {
    return this.prisma.teacher.findUnique({
      where: { userId },
      include: {
        user: true,
        classes: {
          include: { students: { include: { user: true } } },
        },
        feedbacks: true,
      },
    });
  }
  async getClassesByTeacherUserId(userId: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: { userId },
      include: {
        classes: true,
      },
    });

    if (!teacher) throw new Error('معلم یافت نشد');

    return teacher.classes;
  }

  async getStudentsByTeacher(userId: string) {
  const teacher = await this.prisma.teacher.findUnique({
    where: { userId },
    include: {
      classes: {
        include: {
          students: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  if (!teacher) {
    throw new Error('معلم یافت نشد');
  }

  return teacher.classes.flatMap(cls =>
    cls.students.map(student => ({
      classId: cls.id,
      className: cls.name,
      studentId: student.id,
      name: student.user.name,
      username: student.user.username,
    }))
  );
}
}
