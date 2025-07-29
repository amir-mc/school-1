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
exports.GradesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GradesService = class GradesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async giveGrade(dto) {
        return this.prisma.grade.create({
            data: {
                studentId: dto.studentId,
                subject: dto.subject,
                value: dto.score,
            },
        });
    }
    async getStudentGrades(studentId) {
        return this.prisma.grade.findMany({
            where: { studentId },
        });
    }
    async addGrade(data) {
        return this.prisma.grade.create({
            data,
        });
    }
    async updateGrade(gradeId, data) {
        return this.prisma.grade.update({
            where: { id: gradeId },
            data,
        });
    }
    async deleteGrade(gradeId) {
        return this.prisma.grade.delete({
            where: { id: gradeId },
        });
    }
    async getGradesByStudent(studentId) {
        return this.prisma.grade.findMany({
            where: { studentId },
            include: {
                student: {
                    include: {
                        user: true,
                        class: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async getAllGrades() {
        return this.prisma.grade.findMany({
            include: {
                student: {
                    include: {
                        user: true,
                        class: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async getGradesByStudentUserId(userId) {
        const student = await this.prisma.student.findUnique({
            where: {
                userId,
            },
            include: {
                grades: true,
            },
        });
        if (!student) {
            throw new common_1.NotFoundException('دانش‌آموز یافت نشد');
        }
        return student.grades;
    }
};
exports.GradesService = GradesService;
exports.GradesService = GradesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GradesService);
//# sourceMappingURL=grades.service.js.map