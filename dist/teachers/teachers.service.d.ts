import { PrismaService } from '../prisma/prisma.service';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
    assignToClass(dto: {
        teacherId: string;
        classId: string;
    }): Promise<{
        id: string;
        name: string;
        grade: number;
    }>;
    getAll(): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        classes: {
            id: string;
            name: string;
            grade: number;
        }[];
    } & {
        id: string;
        userId: string;
    })[]>;
}
