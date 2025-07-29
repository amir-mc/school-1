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
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SchedulesService = class SchedulesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.schedule.create({ data });
    }
    findAll() {
        return this.prisma.schedule.findMany({ include: { class: true } });
    }
    findByClass(classId) {
        return this.prisma.schedule.findMany({
            where: { classId },
        });
    }
    update(id, data) {
        return this.prisma.schedule.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.schedule.delete({ where: { id } });
    }
    async getTeacherSchedules(userId) {
        const teacher = await this.prisma.teacher.findUnique({
            where: { userId },
            include: {
                classes: {
                    include: {
                        schedules: true,
                    },
                },
            },
        });
        if (!teacher)
            return { message: 'معلم یافت نشد' };
        return {
            message: 'برنامه کلاس‌های تدریس‌ شده',
            data: teacher.classes.flatMap(cls => cls.schedules),
        };
    }
    async getStudentSchedule(userId) {
        const student = await this.prisma.student.findUnique({
            where: { userId },
            include: {
                class: {
                    include: { schedules: true },
                },
            },
        });
        if (!student)
            return { message: 'دانش‌آموز یافت نشد' };
        return {
            message: 'برنامه هفتگی دانش‌آموز',
            data: student.class.schedules,
        };
    }
};
exports.SchedulesService = SchedulesService;
exports.SchedulesService = SchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SchedulesService);
//# sourceMappingURL=schedules.service.js.map