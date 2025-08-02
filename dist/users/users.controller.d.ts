import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: {
        name: string;
        username: string;
        password: string;
        role: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        username: string;
        role: import("generated/prisma").$Enums.Role;
    }[]>;
}
