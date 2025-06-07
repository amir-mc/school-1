import { PrismaService } from '../prisma/prisma.service';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
    assignToClass(dto: {
        teacherId: string;
        classId: string;
    }): Promise<{
        grade: number;
        id: string;
        name: string;
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
            grade: number;
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        userId: string;
    })[]>;
}
