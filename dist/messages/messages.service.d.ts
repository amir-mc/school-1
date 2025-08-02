import { Role } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    sendMessage(fromId: string, toId: string | null, content: string, isPublic?: boolean): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
    getInbox(userId: string): Promise<({
        sender: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    })[]>;
    getSentMessages(userId: string): Promise<({
        receiver: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    })[]>;
    getPublicMessages(): Promise<({
        sender: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    })[]>;
    sendGroupMessage(fromId: string, body: {
        content: string;
        toRoles?: Role[];
        toUserIds?: string[];
        isPublic?: boolean;
    }): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    markAsRead(messageId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
    getUnreadMessages(userId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    deleteMessage(messageId: string): Promise<{
        message: string;
    }>;
    getMessagesSentByAdmin(adminUserId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    updateMessage(messageId: string, content: string, adminUserId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
}
