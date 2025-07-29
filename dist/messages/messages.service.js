"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MessagesService = class MessagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async sendMessage(fromId, toId, content, isPublic = false) {
        return this.prisma.message.create({
            data: {
                fromId,
                toId,
                content,
                isPublic,
            },
        });
    }
    async getInbox(userId) {
        return this.prisma.message.findMany({
            where: { toId: userId },
            include: { sender: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getSentMessages(userId) {
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
    async sendGroupMessage(fromId, body) {
        const recipients = new Set();
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
        const messages = Array.from(recipients).map((toId) => this.prisma.message.create({
            data: {
                content: body.content,
                fromId,
                toId,
                isPublic: !!body.isPublic,
            },
        }));
        return this.prisma.$transaction(messages);
    }
    async markAsRead(messageId, userId) {
        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });
        if (!message) {
            throw new common_1.NotFoundException('پیام یافت نشد');
        }
        if (message.toId !== userId) {
            throw new common_1.ForbiddenException('دسترسی غیرمجاز');
        }
        return this.prisma.message.update({
            where: { id: messageId },
            data: { isRead: true },
        });
    }
    async getUnreadMessages(userId) {
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
    async deleteMessage(messageId) {
        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });
        if (!message) {
            throw new common_1.NotFoundException('پیام مورد نظر یافت نشد.');
        }
        await this.prisma.message.delete({
            where: { id: messageId },
        });
        return { message: 'پیام با موفقیت حذف شد.' };
    }
    async getMessagesSentByAdmin(adminUserId) {
        return this.prisma.message.findMany({
            where: {
                fromId: adminUserId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async updateMessage(messageId, content, adminUserId) {
        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });
        if (!message) {
            throw new common_1.NotFoundException('پیام مورد نظر یافت نشد');
        }
        if (message.fromId !== adminUserId) {
            throw new common_1.ForbiddenException('شما اجازه ویرایش این پیام را ندارید');
        }
        return this.prisma.message.update({
            where: { id: messageId },
            data: { content },
        });
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessagesService);
//# sourceMappingURL=messages.service.js.map