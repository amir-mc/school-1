import { PrismaService } from 'src/prisma/prisma.service';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    createStudent(userId: string, parentId: string, classId: string): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    deleteStudent(id: string): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    updateStudent(id: string, data: {
        classId?: string;
        parentId?: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    getAllStudents(): import("generated/prisma").Prisma.PrismaPromise<({
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
            id: string;
            name: string;
            grade: number;
        };
        parent: ({
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
        }) | null;
    } & {
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    })[]>;
    assignParentToStudent(studentId: string, parentId: string): Promise<{
        parent: ({
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
        }) | null;
    } & {
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
}
