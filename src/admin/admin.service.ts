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
  password: string;
  role: string;
  classId?: string;
}) {
  const { name, username, password, role, classId } = dto;

  return this.prisma.user.create({
    data: {
      name,
      username,
      password,
      role: role as Role,
      student: role === "STUDENT" && classId
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


}
