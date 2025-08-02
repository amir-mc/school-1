import { TeachersService } from './teachers.service';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    getMyClasses(req: any): Promise<{
        grade: number;
        id: string;
        name: string;
    }[]>;
    getStudents(req: any): Promise<{
        classId: string;
        className: string;
        studentId: string;
        name: string;
        username: string;
    }[]>;
    getProfile(req: any): import("generated/prisma").Prisma.Prisma__TeacherClient<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            isConfirmed: boolean;
            createdAt: Date;
        };
        classes: ({
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
        } & {
            grade: number;
            id: string;
            name: string;
        })[];
        feedbacks: {
            id: string;
            parentId: string;
            teacherId: string;
            score: number;
            comment: string | null;
        }[];
    } & {
        id: string;
        userId: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
