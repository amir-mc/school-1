import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    send(dto: {
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
    get(userId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        fromId: string;
        toId: string | null;
        isPublic: boolean;
    }[]>;
}
