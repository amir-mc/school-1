import { SchedulesService } from './schedules.service';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    set(dto: {
        classId: string;
        day: string;
        subject: string;
        startTime: string;
        endTime: string;
    }): Promise<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }>;
    get(classId: string): Promise<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }[]>;
}
