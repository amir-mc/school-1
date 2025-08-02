import { MessagesService } from './messages.service';
import { SendGroupMessageDto } from './dto/send-group-message.dto';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    sendGroupMessage(req: any, dto: SendGroupMessageDto): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    markAsRead(messageId: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
    getUnreadMessages(req: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    deleteMessage(id: string): Promise<{
        message: string;
    }>;
    getAdminSentMessages(req: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }[]>;
    updateMessage(messageId: string, body: {
        content: string;
    }, req: any): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
    sendMessage(req: any, body: {
        toId?: string;
        content: string;
        isPublic?: boolean;
    }): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
        isRead: boolean;
    }>;
    getInbox(req: any): Promise<({
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
    getSentMessages(req: any): Promise<({
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
}
