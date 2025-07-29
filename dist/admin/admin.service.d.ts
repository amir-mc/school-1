import { PrismaService } from 'src/prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<{
        id: string;
        name: string;
        username: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }[]>;
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    updateUser(id: string, dto: {
        name?: string;
        username?: string;
        password?: string;
        role?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    findUsers({ query, classId, role }: {
        query?: string;
        classId?: string;
        role?: string;
    }): Promise<({
        student: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        } | null;
    } & {
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    })[]>;
    getAllClasses(): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    createUser(dto: {
        name: string;
        username: string;
        password: string;
        role: string;
        classId?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    countUsersByRole(role: string): Promise<{
        count: number;
    }>;
    countAllUsers(): Promise<{
        count: number;
    }>;
    countClasses(): Promise<{
        count: number;
    }>;
}
