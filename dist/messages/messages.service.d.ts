import { PrismaService } from '../prisma/prisma.service';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    sendMessage(dto: {
        senderId: string;
        receiverId?: string;
        text: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
    }>;
    getMessagesForUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
    }[]>;
}
