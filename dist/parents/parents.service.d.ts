import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParentsService {
    private prisma;
    constructor(prisma: PrismaService);
    getChildrenGrades(userId: string): Promise<{
        message: string;
        data: {
            studentId: string;
            studentName: string;
            grades: string | {
                id: string;
                createdAt: Date;
                studentId: string;
                subject: string;
                value: number;
            }[];
        }[];
    }>;
}
