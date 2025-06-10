import { TeachersService } from './teachers.service';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    assignClass(dto: {
        teacherId: string;
        classId: string;
    }): Promise<{
        grade: number;
        id: string;
        name: string;
    }>;
    getAll(): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        classes: {
            grade: number;
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        userId: string;
    })[]>;
}
