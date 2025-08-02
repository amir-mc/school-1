import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        role: true,
        createdAt: true,
      },
    });
  }
  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
  async updateUser(id: string, dto: { name?: string; username?: string; password?: string; role?: string }) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('کاربر پیدا نشد');

    let updatedData: any = { ...dto };

    // اگر رمز جدید داده شده بود، هش کن
    if (dto.password) {
      updatedData.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updatedData,
    });
  }
  
  async getUserById(id: string) {
  const user = await this.prisma.user.findUnique({ where: { id } });
  if (!user) throw new NotFoundException('کاربر پیدا نشد');
  return user;
}

async findUsers({ query,classId, role }: { query?: string; classId?: string; role?: string }) {
  const filters: any[] = [];

  if (query) {
    filters.push({
      OR: [
        { id: { contains: query } },
        { name: { contains: query, mode: "insensitive" } },
        { username: { contains: query, mode: "insensitive" } },
      ],
    });
  }

  // تبدیل role به enum اگر معتبر بود
  if (role && Object.values(Role).includes(role.toUpperCase() as Role)) {
    filters.push({ role: role.toUpperCase() as Role });
    if (role.toUpperCase() === "STUDENT") {
      if (classId) {
        filters.push({ student: { classId } });
      }
    }
  }

  return this.prisma.user.findMany({
    where: filters.length ? { AND: filters } : undefined,
    include: {
      student: true, // برای بررسی کلاس و مقطع
    },
    orderBy: { createdAt: "desc" },
  });
}


getAllClasses() {
  return this.prisma.class.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
}



  async createUser(dto: {
  name: string;
  username: string;
  nationalId: string;
  password: string;
  role: string;
  classId?: string;
}) {
  const { name, username, password, role, classId, nationalId } = dto;
  const hashedPassword = await bcrypt.hash(password, 10);

  return this.prisma.user.create({
    data: {
      id: nationalId , // 👈 تبدیل به رشته
      name,
      username,
      password: hashedPassword,
      role: role as Role,
      student: role === 'STUDENT' && classId
        ? {
            create: {
              classId,
            },
          }
        : undefined,
    },
  });
}


async countUsersByRole(role: string): Promise<{ count: number }> {
  if (role === 'ALL') {
    const count = await this.prisma.user.count();
    return { count };
  }

  const count = await this.prisma.user.count({
    where: { role: role.toUpperCase() as any },
  });

  return { count };
}



async countAllUsers(): Promise<{ count: number }> {
  const count = await this.prisma.user.count();
  return { count };
}

  async countClasses() {
    const count = await this.prisma.class.count();
    return { count };
  }
  
// async getUsersByRole(role: string) {
//     const normalizedRole = role?.toUpperCase();

//     if (normalizedRole === 'TEACHER') {
//       return this.prisma.teacher.findMany({
//         include: {
//           user: {
//             select: {
//               id: true,
//               username: true,
//                name: true,
//               role: true,
//             },
//           },
//         },
//       });
//     }

//     if (normalizedRole === 'STUDENT') {
//       return this.prisma.student.findMany({
//         include: {
//           user: {
//             select: {
//               id: true,
//               username: true,
//               name: true,

//               role: true,
//             },
//           },
//         },
//       });
//     }

//     if (normalizedRole === 'PARENT') {
//       return this.prisma.parent.findMany({
//         include: {
//           user: {
//             select: {
//               id: true,
//               username: true,
//              name: true,
//               role: true,
//             },
//           },
//         },
//       });
//     }

//     // اگر ADMIN یا نقش نامعتبر باشه
    

//   }
async getPendingUsersByRole(role: Role) {
  return this.prisma.user.findMany({
    where: {
      role,
      isConfirmed: false,
    },
  });
}

async confirmUser(userId: string, body: { classId?: string; parentId?: string }) {
  const user = await this.prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('کاربر یافت نشد');

  if (user.isConfirmed) throw new Error('کاربر قبلاً تأیید شده است');

  await this.prisma.user.update({
    where: { id: userId },
    data: { isConfirmed: true },
  });

  if (user.role === 'TEACHER') {
    return this.prisma.teacher.create({
      data: {
        userId: user.id,
      },
    });
  }

  if (user.role === 'STUDENT') {
    if (!body.classId) throw new Error('classId الزامی است برای دانش‌آموز');
    return this.prisma.student.create({
      data: {
        userId: user.id,
        classId: body.classId,
        parentId: body.parentId || null,
      },
    });
  }

  if (user.role === 'PARENT') {
    return this.prisma.parent.create({
      data: {
        userId: user.id,
      },
    });
  }

  return { message: 'نقش نامعتبر است یا نیازی به تأیید ندارد' };
}
// admin.service.ts
async confirmTeacher(userId: string) {
  const user = await this.prisma.user.findUnique({ where: { id: userId } })
  if (!user || user.role !== 'TEACHER') throw new Error('کاربر معتبر نیست')

  // اگر معلم قبلا اضافه شده، تکراری نشه
  const existing = await this.prisma.teacher.findUnique({ where: { userId } })
  if (existing) return existing

  return this.prisma.teacher.create({
    data: {
      userId,
    },
  })
}
async confirmStudent(userId: string, classId: string) {
  // تأیید کاربر
  await this.prisma.user.update({
    where: { id: userId },
    data: { isConfirmed: true },
  });

  // اضافه کردن به جدول Student
  return this.prisma.student.create({
    data: {
      userId,
      classId,
    },
  });
}

async confirmParent(userId: string) {
  // ۱. اطمینان از وجود کاربر با نقش PARENT
  const user = await this.prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user || user.role !== 'PARENT') {
    throw new NotFoundException('کاربر والد یافت نشد یا نقش نامعتبر است');
  }

  // ۲. بررسی اینکه آیا قبلاً در جدول Parent ثبت شده یا نه
  const alreadyConfirmed = await this.prisma.parent.findUnique({
    where: { userId },
  });

  if (alreadyConfirmed) {
    throw new BadRequestException('این کاربر قبلاً تأیید شده است');
  }

  // ۳. افزودن به جدول Parent
  await this.prisma.parent.create({
    data: {
      userId,
    },
  });

  return { message: 'والد با موفقیت تأیید شد' };
}

}
