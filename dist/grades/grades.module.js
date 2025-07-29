"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesModule = void 0;
const common_1 = require("@nestjs/common");
const grades_service_1 = require("./grades.service");
const grades_controller_1 = require("./grades.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let GradesModule = class GradesModule {
};
exports.GradesModule = GradesModule;
exports.GradesModule = GradesModule = __decorate([
    (0, common_1.Module)({
        controllers: [grades_controller_1.GradesController],
        providers: [grades_service_1.GradesService, prisma_service_1.PrismaService],
    })
], GradesModule);
//# sourceMappingURL=grades.module.js.map