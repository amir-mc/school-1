import { UsersService } from 'src/users/users.service';
import { AdminService } from './admin.service';
import { Role } from 'generated/prisma';
export declare class AdminController {
    private readonly usersService;
    private readonly adminService;
    constructor(usersService: UsersService, adminService: AdminService);
    createUser(dto: {
        nationalId: string;
        name: string;
        username: string;
        password: string;
        role: string;
        classId?: string;
    }): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
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
        isConfirmed: boolean;
        createdAt: Date;
    }>;
    findAll(query: string, role: string, classId: string): Promise<({
        student: {
            id: string;
            userId: string;
            classId: string;
            parentId: string | null;
        } | null;
    } & {
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    })[]>;
    findAllClasses(): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    countStudents(): Promise<{
        count: number;
    }>;
    countTeachers(): Promise<{
        count: number;
    }>;
    countParents(): Promise<{
        count: number;
    }>;
    countAllUsers(): Promise<{
        count: number;
    }>;
    countClasses(): Promise<{
        count: number;
    }>;
    getPendingUsers(role: Role): Promise<{
        id: string;
        name: string;
        username: string;
        password: string;
        role: import("generated/prisma").$Enums.Role;
        isConfirmed: boolean;
        createdAt: Date;
    }[]>;
    confirmUser(userId: string, body: {
        classId?: string;
        parentId?: string;
    }): Promise<{
        id: string;
        userId: string;
    } | {
        message: string;
    }>;
    confirmTeacher(body: {
        userId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    confirmStudent(body: {
        userId: string;
        classId: string;
    }): Promise<{
        id: string;
        userId: string;
        classId: string;
        parentId: string | null;
    }>;
    confirmParent(body: {
        userId: string;
    }): Promise<{
        message: string;
    }>;
}
