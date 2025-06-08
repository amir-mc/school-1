import { GradesService } from './grades.service';
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
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
