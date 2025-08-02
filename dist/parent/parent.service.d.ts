import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParentService {
    private prisma;
    constructor(prisma: PrismaService);
    createParent(userId: string): Promise<{
        id: string;
        userId: string;
    }>;
    getAllParents(): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        };
        students: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
    })[]>;
    getParentById(id: string): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        };
        students: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
    }) | null>;
    updateParent(id: string, data: {
        name?: string;
        username?: string;
        password?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    deleteParent(id: string): Promise<{
        id: string;
        userId: string;
    }>;
}
