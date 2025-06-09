import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClassService {
    private prisma;
    constructor(prisma: PrismaService);
    createClass(data: {
        name: string;
        grade: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        id: string;
        name: string;
        grade: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    getAllClasses(): import("generated/prisma").Prisma.PrismaPromise<({
        students: ({
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
            classId: string;
            parentId: string;
        })[];
        teachers: ({
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
        })[];
        schedules: {
            id: string;
            classId: string;
            day: string;
            subject: string;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        name: string;
        grade: number;
    })[]>;
    getClassById(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<({
        students: ({
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
            classId: string;
            parentId: string;
        })[];
        teachers: ({
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
        })[];
        schedules: {
            id: string;
            classId: string;
            day: string;
            subject: string;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        name: string;
        grade: number;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    updateClass(id: string, data: {
        name?: string;
        grade?: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        id: string;
        name: string;
        grade: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    deleteClass(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<{
        id: string;
        name: string;
        grade: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
