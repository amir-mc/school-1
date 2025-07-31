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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClassService = class ClassService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addTeacherToClass(classId, teacherId) {
        const cls = await this.prisma.class.findUnique({ where: { id: classId } });
        const teacher = await this.prisma.teacher.findUnique({ where: { id: teacherId } });
        if (!cls)
            throw new Error('کلاس مورد نظر یافت نشد');
        if (!teacher)
            throw new Error('معلم مورد نظر یافت نشد');
        return this.prisma.class.update({
            where: { id: classId },
            data: {
                teachers: {
                    connect: { id: teacherId },
                },
            },
        });
    }
    async removeTeacherFromClass(classId, teacherId) {
        return this.prisma.class.update({
            where: { id: classId },
            data: {
                teachers: {
                    disconnect: { id: teacherId },
                },
            },
            include: {
                teachers: { include: { user: true } },
            },
        });
    }
    async createClass(data) {
        const { name, grade, teacherIds } = data;
        if (teacherIds?.length) {
            const existingTeachers = await this.prisma.teacher.count({
                where: { id: { in: teacherIds } }
            });
            if (existingTeachers !== teacherIds.length) {
                throw new common_1.BadRequestException('یک یا چند معلم یافت نشدند');
            }
        }
        return this.prisma.class.create({
            data: {
                name,
                grade,
                teachers: teacherIds?.length
                    ? { connect: teacherIds.map(id => ({ id })) }
                    : undefined,
            },
            include: {
                teachers: { include: { user: true } },
            },
        });
    }
    async getAllClasses() {
        return this.prisma.class.findMany({
            include: {
                students: {
                    include: { user: true },
                },
                teachers: {
                    include: { user: true },
                },
                schedules: true,
            },
        });
    }
    async addStudentToClass(classId, studentId) {
        return this.prisma.student.update({
            where: { id: studentId },
            data: { classId },
            include: {
                user: true,
                class: true,
            },
        });
    }
    getClassById(id) {
        return this.prisma.class.findUnique({
            where: { id },
            include: {
                students: {
                    include: { user: true },
                },
                teachers: {
                    include: { user: true },
                },
                schedules: true,
            },
        });
    }
    updateClass(id, data) {
        return this.prisma.class.update({
            where: { id },
            data,
        });
    }
    deleteClass(id) {
        return this.prisma.class.delete({ where: { id } });
    }
};
exports.ClassService = ClassService;
exports.ClassService = ClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassService);
//# sourceMappingURL=class.service.js.map