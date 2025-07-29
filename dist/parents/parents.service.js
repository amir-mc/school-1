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
exports.ParentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParentsService = class ParentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getChildrenGrades(userId) {
        const parent = await this.prisma.parent.findUnique({
            where: { userId },
            include: {
                students: {
                    include: {
                        grades: true,
                        user: true,
                    },
                },
            },
        });
        if (!parent) {
            throw new common_1.NotFoundException('والد یافت نشد');
        }
        if (parent.students.length === 0) {
            return {
                message: 'هیچ فرزندی برای این والد ثبت نشده است',
                data: [],
            };
        }
        return {
            message: 'نمرات فرزندان با موفقیت دریافت شد',
            data: parent.students.map(student => ({
                studentId: student.id,
                studentName: student.user.name,
                grades: student.grades.length > 0 ? student.grades : 'نمره‌ای ثبت نشده است',
            })),
        };
    }
};
exports.ParentsService = ParentsService;
exports.ParentsService = ParentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParentsService);
//# sourceMappingURL=parents.service.js.map