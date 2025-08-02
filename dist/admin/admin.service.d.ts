import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'generated/prisma';
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
        isConfirmed: boolean;
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
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
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
        isConfirmed: boolean;
        createdAt: Date;
    })[]>;
    getAllClasses(): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    createUser(dto: {
        name: string;
        username: string;
        nationalId: string;
        password: string;
        role: string;
        classId?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
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
    getPendingUsersByRole(role: Role): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }[]>;
    confirmUser(userId: string, body: {
        classId?: string;
        parentId?: string;
    }): Promise<{
        id: string;
        userId: string;
    } | {
        message: string;
    }>;
    confirmTeacher(userId: string): Promise<{
        id: string;
        userId: string;
    }>;
    confirmStudent(userId: string, classId: string): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    confirmParent(userId: string): Promise<{
        message: string;
    }>;
}
