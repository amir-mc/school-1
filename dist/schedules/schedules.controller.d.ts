import { SchedulesService } from './schedules.service';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(body: any): import("generated/prisma").Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<({
        class: {
            grade: number;
            id: string;
            name: string;
        };
    } & {
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    })[]>;
    findByClass(classId: string): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }[]>;
    update(id: string, body: any): import("generated/prisma").Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    getMyTeachingSchedule(req: any): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: {
            id: string;
            classId: string;
            subject: string;
            day: string;
            startTime: string;
            endTime: string;
        }[];
    }>;
    getMyClassSchedule(req: any): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: {
            id: string;
            classId: string;
            subject: string;
            day: string;
            startTime: string;
            endTime: string;
        }[];
    }>;
}
