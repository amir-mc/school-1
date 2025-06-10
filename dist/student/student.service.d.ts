import { PrismaService } from 'src/prisma/prisma.service';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    createStudent(userId: string, parentId: string, classId: string): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string;
    }>;
    getAllStudents(): import("generated/prisma").Prisma.PrismaPromise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        parent: {
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
        parentId: string;
    })[]>;
}
