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
        subject: string;
        studentId: string;
        value: number;
    }>;
    getStudentGrades(studentId: string): Promise<{
        id: string;
        createdAt: Date;
        subject: string;
        studentId: string;
        value: number;
    }[]>;
}
