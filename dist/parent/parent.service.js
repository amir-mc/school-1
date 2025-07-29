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
exports.ParentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParentService = class ParentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createParent(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('کاربر مورد نظر یافت نشد');
        return this.prisma.parent.create({ data: { userId } });
    }
    async getAllParents() {
        return this.prisma.parent.findMany({ include: { user: true, students: true } });
    }
    async getParentById(id) {
        return this.prisma.parent.findUnique({ where: { id }, include: { user: true, students: true } });
    }
    async updateParent(id, data) {
        const parent = await this.prisma.parent.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!parent)
            throw new Error(' !والد مورد نظر یافت نشد');
        return this.prisma.user.update({
            where: { id: parent.userId },
            data,
        });
    }
    async deleteParent(id) {
        return this.prisma.parent.delete({
            where: { id },
        });
    }
};
exports.ParentService = ParentService;
exports.ParentService = ParentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParentService);
//# sourceMappingURL=parent.service.js.map