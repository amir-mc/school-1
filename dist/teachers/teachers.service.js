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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeachersService = class TeachersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getProfile(userId) {
        return this.prisma.teacher.findUnique({
            where: { userId },
            include: {
                user: true,
                classes: {
                    include: { students: { include: { user: true } } },
                },
                feedbacks: true,
            },
        });
    }
    async getClassesByTeacherUserId(userId) {
        const teacher = await this.prisma.teacher.findUnique({
            where: { userId },
            include: {
                classes: true,
            },
        });
        if (!teacher)
            throw new Error('معلم یافت نشد');
        return teacher.classes;
    }
    async getStudentsByTeacher(userId) {
        const teacher = await this.prisma.teacher.findUnique({
            where: { userId },
            include: {
                classes: {
                    include: {
                        students: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        if (!teacher) {
            throw new Error('معلم یافت نشد');
        }
        return teacher.classes.flatMap(cls => cls.students.map(student => ({
            classId: cls.id,
            className: cls.name,
            studentId: student.id,
            name: student.user.name,
            username: student.user.username,
        })));
    }
};
exports.TeachersService = TeachersService;
exports.TeachersService = TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeachersService);
//# sourceMappingURL=teachers.service.js.map