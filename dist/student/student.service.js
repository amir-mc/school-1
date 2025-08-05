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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentService = class StudentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createStudent(userId, parentId, classId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        const parent = await this.prisma.parent.findUnique({ where: { id: parentId } });
        const classObj = await this.prisma.class.findUnique({ where: { id: classId } });
        if (!user)
            throw new common_1.NotFoundException('کاربر پیدا نشد');
        if (!parent)
            throw new common_1.NotFoundException('والد پیدا نشد');
        if (!classObj)
            throw new common_1.NotFoundException('کلاس پیدا نشد');
        return this.prisma.student.create({
            data: {
                userId,
                parentId,
                classId,
            },
        });
    }
    async deleteStudent(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('دانش‌آموز یافت نشد');
        return this.prisma.student.delete({ where: { id } });
    }
    async updateStudent(id, data) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student)
            throw new common_1.NotFoundException('دانش‌آموز یافت نشد');
        return this.prisma.student.update({
            where: { id },
            data,
        });
    }
    getAllStudents() {
        return this.prisma.student.findMany({
            include: {
                user: true,
                class: true,
                parent: {
                    include: { user: true },
                },
            },
        });
    }
    async assignParentToStudent(studentId, parentId) {
        const student = await this.prisma.student.findUnique({
            where: { id: studentId },
        });
        if (!student) {
            throw new common_1.NotFoundException('دانش‌آموز یافت نشد');
        }
        const parent = await this.prisma.parent.findUnique({
            where: { id: parentId },
        });
        if (!parent) {
            throw new common_1.NotFoundException('والد یافت نشد');
        }
        return this.prisma.student.update({
            where: { id: studentId },
            data: {
                parentId: parentId,
            },
            include: {
                parent: {
                    include: { user: true },
                },
            },
        });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentService);
//# sourceMappingURL=student.service.js.map