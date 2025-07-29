import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Role } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async sendMessage(fromId: string, toId: string | null, content: string, isPublic: boolean = false) {
    return this.prisma.message.create({
      data: {
        fromId,
        toId,
        content,
        isPublic,
      },
    });
  }

  async getInbox(userId: string) {
    return this.prisma.message.findMany({
      where: { toId: userId },
      include: { sender: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getSentMessages(userId: string) {
    return this.prisma.message.findMany({
      where: { fromId: userId },
      include: { receiver: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getPublicMessages() {
    return this.prisma.message.findMany({
      where: { isPublic: true },
      include: { sender: true },
      orderBy: { createdAt: 'desc' },
    });
  }
  async sendGroupMessage(fromId: string, body: {
  content: string;
  toRoles?: Role[];
  toUserIds?: string[];
  isPublic?: boolean;
}) {
  const recipients = new Set<string>();

  if (body.toRoles && body.toRoles.length > 0) {
    const users = await this.prisma.user.findMany({
      where: {
        role: { in: body.toRoles },
      },
    });
    users.forEach((u) => recipients.add(u.id));
  }

  if (body.toUserIds && body.toUserIds.length > 0) {
    body.toUserIds.forEach((id) => recipients.add(id));
  }

  if (recipients.size === 0) {
    const allUsers = await this.prisma.user.findMany({ where: { id: { not: fromId } } });
    allUsers.forEach((u) => recipients.add(u.id));
  }

  const messages = Array.from(recipients).map((toId) =>
    this.prisma.message.create({
      data: {
        content: body.content,
        fromId,
        toId,
        isPublic: !!body.isPublic,
      },
    })
  );

  return this.prisma.$transaction(messages);
}
// src/messages/messages.service.ts
async markAsRead(messageId: string, userId: string) {
  const message = await this.prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) {
    throw new NotFoundException('پیام یافت نشد');
  }

  if (message.toId !== userId) {
    throw new ForbiddenException('دسترسی غیرمجاز');
  }

  return this.prisma.message.update({
    where: { id: messageId },
    data: { isRead: true },
  });
}
async getUnreadMessages(userId: string) {
  return this.prisma.message.findMany({
    where: {
      toId: userId,
      isRead: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
async deleteMessage(messageId: string) {
  const message = await this.prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) {
    throw new NotFoundException('پیام مورد نظر یافت نشد.');
  }

  await this.prisma.message.delete({
    where: { id: messageId },
  });

  return { message: 'پیام با موفقیت حذف شد.' };
}
async getMessagesSentByAdmin(adminUserId: string) {
  // اطمینان از اینکه این کاربر ادمین هست اختیاریه چون RolesGuard بررسی می‌کنه
  return this.prisma.message.findMany({
    where: {
      fromId: adminUserId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
async updateMessage(messageId: string, content: string, adminUserId: string) {
  // بررسی اینکه فقط پیام‌های خود ادمین رو می‌تونه ویرایش کنه
  const message = await this.prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) {
    throw new NotFoundException('پیام مورد نظر یافت نشد');
  }

  if (message.fromId !== adminUserId) {
    throw new ForbiddenException('شما اجازه ویرایش این پیام را ندارید');
  }

  return this.prisma.message.update({
    where: { id: messageId },
    data: { content },
  });
}


}
