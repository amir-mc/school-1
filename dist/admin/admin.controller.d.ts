import { UsersService } from 'src/users/users.service';
export declare class AdminController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: {
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
        createdAt: Date;
    }>;
}
