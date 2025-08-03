import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
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
    create(body: {
        userId: string;
        parentId: string;
        classId: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    assignParent(body: {
        studentId: string;
        parentId: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
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
}
