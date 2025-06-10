import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeacherService {
    private prisma;
    constructor(prisma: PrismaService);
    createTeacher(userId: string): Promise<{
        id: string;
        userId: string;
    }>;
    getAllTeachers(): import("generated/prisma").Prisma.PrismaPromise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: string;
        userId: string;
    })[]>;
    getTeacherById(id: string): import("generated/prisma").Prisma.Prisma__TeacherClient<({
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
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    deleteTeacher(id: string): import("generated/prisma").Prisma.Prisma__TeacherClient<{
        id: string;
        userId: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
