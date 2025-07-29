import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackService {
    private prisma;
    constructor(prisma: PrismaService);
    create(parentId: string, dto: CreateFeedbackDto): Promise<{
        id: string;
        parentId: string;
        teacherId: string;
        score: number;
        comment: string | null;
    }>;
    getTeacherFeedback(teacherId: string): Promise<({
        parent: {
            user: {
                name: string;
            };
        };
    } & {
        id: string;
        parentId: string;
        teacherId: string;
        score: number;
        comment: string | null;
    })[]>;
}
