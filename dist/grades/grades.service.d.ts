import { PrismaService } from '../prisma/prisma.service';
export declare class GradesService {
    private prisma;
    constructor(prisma: PrismaService);
    giveGrade(dto: {
        studentId: string;
        teacherId: string;
        subject: string;
        score: number;
    }): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }>;
    getStudentGrades(studentId: string): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }[]>;
    addGrade(data: {
        studentId: string;
        subject: string;
        value: number;
    }): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }>;
    updateGrade(gradeId: string, data: {
        value?: number;
        subject?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }>;
    deleteGrade(gradeId: string): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }>;
    getGradesByStudent(studentId: string): Promise<({
        student: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    })[]>;
    getAllGrades(): Promise<({
        student: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    })[]>;
    getGradesByStudentUserId(userId: string): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        subject: string;
        value: number;
    }[]>;
}
