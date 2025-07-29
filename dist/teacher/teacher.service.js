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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeacherService = class TeacherService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTeacher(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('کاربر یافت نشد');
        if (user.role !== 'TEACHER') {
            throw new common_1.BadRequestException('نقش کاربر باید TEACHER باشد');
        }
        return this.prisma.teacher.create({
            data: {
                userId,
            },
        });
    }
    getAllTeachers() {
        return this.prisma.teacher.findMany({
            include: { user: true },
        });
    }
    getTeacherById(id) {
        return this.prisma.teacher.findUnique({
            where: { id },
            include: { user: true, classes: true },
        });
    }
    deleteTeacher(id) {
        return this.prisma.teacher.delete({ where: { id } });
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map