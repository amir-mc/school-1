import { ParentService } from './parent.service';
export declare class ParentController {
    private readonly parentService;
    constructor(parentService: ParentService);
    create(body: {
        userId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        students: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
    })[]>;
    findOne(id: string): Promise<({
        user: {
            id: string;
            name: string;
            username: string;
            password: string;
            role: import("generated/prisma").$Enums.Role;
            createdAt: Date;
        };
        students: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
    }) | null>;
    updateParent(id: string, body: {
        name?: string;
        username?: string;
        password?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    deleteParent(id: string): Promise<{
        id: string;
        userId: string;
    }>;
}
