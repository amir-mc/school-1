import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(req: any, dto: CreateFeedbackDto): Promise<{
        id: string;
        parentId: string;
        teacherId: string;
        score: number;
        comment: string | null;
    }>;
    getFeedbacks(teacherId: string): Promise<({
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
