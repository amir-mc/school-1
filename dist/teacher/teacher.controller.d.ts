import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(body: {
        userId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__TeacherClient<({
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
    remove(id: string): import("generated/prisma").Prisma.Prisma__TeacherClient<{
        id: string;
        userId: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
