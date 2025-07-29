import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParentService {
  constructor(private prisma: PrismaService) {}

  async createParent(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('کاربر مورد نظر یافت نشد');

    return this.prisma.parent.create({ data: { userId } });
  } 

  async getAllParents() {
    return this.prisma.parent.findMany({ include: { user: true, students: true } });
  }

  async getParentById(id: string) {
    return this.prisma.parent.findUnique({ where: { id }, include: { user: true, students: true } });
  }
  
  async updateParent(id: string, data: { name?: string; username?: string; password?: string }) {
  const parent = await this.prisma.parent.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!parent) throw new Error(' !والد مورد نظر یافت نشد');

  return this.prisma.user.update({
    where: { id: parent.userId },
    data,
  });
} 

async deleteParent(id: string) {
  return this.prisma.parent.delete({
    where: { id },
  });
}
}