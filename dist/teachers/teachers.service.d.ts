import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): import("generated/prisma").Prisma.Prisma__TeacherClient<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
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
    getClassesByTeacherUserId(userId: string): Promise<{
        grade: number;
        id: string;
        name: string;
    }[]>;
    getStudentsByTeacher(userId: string): Promise<{
        classId: string;
        className: string;
        studentId: string;
        name: string;
        username: string;
    }[]>;
}
