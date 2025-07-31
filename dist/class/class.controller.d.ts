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
    findAll(): Promise<({
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<({
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
    update(id: string, body: {
        name?: string;
        grade?: number;
    }): import("generated/prisma").Prisma.Prisma__ClassClient<{
        id: string;
        name: string;
        grade: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__ClassClient<{
        id: string;
        name: string;
        grade: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
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
}
