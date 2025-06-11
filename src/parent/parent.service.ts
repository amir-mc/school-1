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
}