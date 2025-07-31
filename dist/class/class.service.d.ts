import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClassService {
    private prisma;
    constructor(prisma: PrismaService);
    addTeacherToClass(classId: string, teacherId: string): Promise<{
        id: string;
        name: string;
        grade: number;
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
        id: string;
        name: string;
        grade: number;
    }>;
    createClass(data: {
        name: string;
        grade: number;
        teacherIds?: string[];
    }): Promise<{
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
        id: string;
        name: string;
        grade: number;
    }>;
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
    addStudentToClass(classId: string, studentId: string): Promise<{
        class: {
            id: string;
            name: string;
            grade: number;
        };
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
