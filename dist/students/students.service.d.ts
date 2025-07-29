import { PrismaService } from '../prisma/prisma.service';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyGrades(userId: string): Promise<{
        message: string;
        data: string | {
            id: string;
            createdAt: Date;
            studentId: string;
            subject: string;
            value: number;
        }[];
    }>;
}
