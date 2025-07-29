import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClassService {
    private prisma;
    constructor(prisma: PrismaService);
    addTeacherToClass(classId: string, teacherId: string): Promise<{
        grade: number;
        id: string;
        name: string;
    }>;
    removeTeacherFromClass(classId: string, teacherId: string): Promise<{
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
    } & {
        grade: number;
        id: string;
        name: string;
    }>;
    createClass(data: {
        name: string;
        grade: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        grade: number;
        id: string;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    getAllClasses(): Promise<({
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
            parentId: string | null;
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
            subject: string;
            day: string;
            startTime: string;
            endTime: string;
        }[];
    } & {
        grade: number;
        id: string;
        name: string;
    })[]>;
    addStudentToClass(classId: string, studentId: string): Promise<{
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        class: {
            grade: number;
            id: string;
            name: string;
        };
    } & {
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
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
            parentId: string | null;
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
            subject: string;
            day: string;
            startTime: string;
            endTime: string;
        }[];
    } & {
        grade: number;
        id: string;
        name: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    updateClass(id: string, data: {
        name?: string;
        grade?: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        grade: number;
        id: string;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    deleteClass(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<{
        grade: number;
        id: string;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
