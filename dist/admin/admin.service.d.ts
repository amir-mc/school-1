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
}
