import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: {
        name: string;
        username: string;
        password: string;
        role: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        username: string;
        role: import("generated/prisma").$Enums.Role;
    }[]>;
    findByUsername(username: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    } | null>;
}
