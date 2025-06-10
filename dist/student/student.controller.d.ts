import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(body: {
        userId: string;
        parentId: string;
        classId: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string;
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
        class: {
            id: string;
            name: string;
            grade: number;
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
    } & {
        id: string;
        userId: string;
        classId: string;
        parentId: string;
    })[]>;
}
