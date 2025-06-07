import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async sendMessage(dto: {
    senderId: string;
    receiverId?: string; // null = پیام عمومی
    text: string;
  }) {
    return this.prisma.message.create({
      data: {
        fromId: dto.senderId,
        toId: dto.receiverId ?? null,
        content: dto.text,
      },
    });
  }

  async getMessagesForUser(userId: string) {
    return this.prisma.message.findMany({
      where: {
        OR: [
          { toId: userId },
          { toId: null }, // پیام عمومی
        ],
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
