import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

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
}
