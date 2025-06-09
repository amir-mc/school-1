import { UsersService } from 'src/users/users.service';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly usersService;
    private readonly adminService;
    constructor(usersService: UsersService, adminService: AdminService);
    getAllUsers(): Promise<{
        id: string;
        name: string;
        username: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }[]>;
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
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
    updateUser(id: string, dto: {
        name?: string;
        username?: string;
        password?: string;
        role?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
}
