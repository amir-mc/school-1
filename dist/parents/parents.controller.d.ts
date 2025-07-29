import { ParentsService } from './parents.service';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: ParentsService);
    getChildrenGrades(req: any): Promise<{
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
