import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
export declare class SchedulesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ScheduleCreateInput): Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findAll(): Prisma.PrismaPromise<({
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
    findByClass(classId: string): Prisma.PrismaPromise<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }[]>;
    update(id: string, data: Prisma.ScheduleUpdateInput): Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: string): Prisma.Prisma__ScheduleClient<{
        id: string;
        classId: string;
        subject: string;
        day: string;
        startTime: string;
        endTime: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    getTeacherSchedules(userId: string): Promise<{
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
    getStudentSchedule(userId: string): Promise<{
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
