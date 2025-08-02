import { ClassService } from './class.service';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(body: {
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
                isConfirmed: boolean;
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
    findAll(): Promise<({
        students: ({
            user: {
                id: string;
                name: string;
                username: string;
                password: string;
                role: import("generated/prisma").$Enums.Role;
                isConfirmed: boolean;
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
                isConfirmed: boolean;
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<({
        students: ({
            user: {
                id: string;
                name: string;
                username: string;
                password: string;
                role: import("generated/prisma").$Enums.Role;
                isConfirmed: boolean;
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
                isConfirmed: boolean;
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
    update(id: string, body: {
        name?: string;
        grade?: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        grade: number;
        id: string;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<{
        grade: number;
        id: string;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
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
                isConfirmed: boolean;
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
    addStudentToClass(classId: string, studentId: string): Promise<{
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
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
}
