import { PrismaService } from '../prisma/prisma.service';
export declare class SchedulesService {
    private prisma;
    constructor(prisma: PrismaService);
    setSchedule(dto: {
        classId: string;
        day: string;
        subject: string;
        startTime: string;
        endTime: string;
    }): Promise<{
        id: string;
        subject: string;
        classId: string;
        day: string;
        startTime: string;
        endTime: string;
    }>;
    getSchedule(classId: string): Promise<{
        id: string;
        subject: string;
        classId: string;
        day: string;
        startTime: string;
        endTime: string;
    }[]>;
}
