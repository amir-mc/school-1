"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const prisma_1 = require("../../generated/prisma/index.js");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUsers() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                username: true,
                role: true,
                createdAt: true,
            },
        });
    }
    async deleteUser(id) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
    async updateUser(id, dto) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('کاربر پیدا نشد');
        let updatedData = { ...dto };
        if (dto.password) {
            updatedData.password = await bcrypt.hash(dto.password, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data: updatedData,
        });
    }
    async getUserById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('کاربر پیدا نشد');
        return user;
    }
    async findUsers({ query, classId, role }) {
        const filters = [];
        if (query) {
            filters.push({
                OR: [
                    { id: { contains: query } },
                    { name: { contains: query, mode: "insensitive" } },
                    { username: { contains: query, mode: "insensitive" } },
                ],
            });
        }
        if (role && Object.values(prisma_1.Role).includes(role.toUpperCase())) {
            filters.push({ role: role.toUpperCase() });
            if (role.toUpperCase() === "STUDENT") {
                if (classId) {
                    filters.push({ student: { classId } });
                }
            }
        }
        return this.prisma.user.findMany({
            where: filters.length ? { AND: filters } : undefined,
            include: {
                student: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }
    getAllClasses() {
        return this.prisma.class.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: 'asc',
            },
        });
    }
    async createUser(dto) {
        const { name, username, password, role, classId } = dto;
        return this.prisma.user.create({
            data: {
                name,
                username,
                password,
                role: role,
                student: role === "STUDENT" && classId
                    ? {
                        create: {
                            classId,
                        },
                    }
                    : undefined,
            },
        });
    }
    async countUsersByRole(role) {
        if (role === 'ALL') {
            const count = await this.prisma.user.count();
            return { count };
        }
        const count = await this.prisma.user.count({
            where: { role: role.toUpperCase() },
        });
        return { count };
    }
    async countAllUsers() {
        const count = await this.prisma.user.count();
        return { count };
    }
    async countClasses() {
        const count = await this.prisma.class.count();
        return { count };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map