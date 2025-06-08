import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(dto: {
        userId: string;
        classId: string;
        parentId: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string;
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
        parent: {
            user: {
                id: string;
                name: string;
                username: string;
                password: string;
                role: import("generated/prisma").$Enums.Role;
                createdAt: Date;
            };
        } & {
            id: string;
            userId: string;
        };
        class: {
            grade: number;
            id: string;
            name: string;
        };
    } & {
        id: string;
        userId: string;
        classId: string;
        parentId: string;
    })[]>;
}
