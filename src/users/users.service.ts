import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: { name: string; username: string; password: string; role: string }) {
  const existing = await this.prisma.user.findUnique({
    where: { username: dto.username },
  });

  if (existing) {
    throw new Error('نام کاربری قبلاً استفاده شده است');
  }

  const hashed = await bcrypt.hash(dto.password, 10);
  return this.prisma.user.create({
    data: {
      name: dto.name,
      username: dto.username,
      password: hashed,
      role: dto.role as any,
    },
  });
}


  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, username: true, role: true },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
