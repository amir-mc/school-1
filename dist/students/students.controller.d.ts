import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: StudentsService);
    getMyGrades(req: any): Promise<{
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
