import { Role } from "generated/prisma";
export declare class SendGroupMessageDto {
    content: string;
    toRoles?: Role[];
    toUserIds?: string[];
    isPublic?: boolean;
}
