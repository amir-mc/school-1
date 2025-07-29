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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesController = void 0;
const common_1 = require("@nestjs/common");
const grades_service_1 = require("./grades.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let GradesController = class GradesController {
    gradesService;
    constructor(gradesService) {
        this.gradesService = gradesService;
    }
    async addGrade(body) {
        return this.gradesService.addGrade(body);
    }
    updateGrade(gradeId, body) {
        return this.gradesService.updateGrade(gradeId, body);
    }
    deleteGrade(gradeId) {
        return this.gradesService.deleteGrade(gradeId);
    }
    getGradesByStudent(studentId) {
        return this.gradesService.getGradesByStudent(studentId);
    }
    getAllGrades() {
        return this.gradesService.getAllGrades();
    }
    getMyGrades(req) {
        const userId = req.user.userId;
        return this.gradesService.getGradesByStudentUserId(userId);
    }
    giveGrade(dto) {
        return this.gradesService.giveGrade(dto);
    }
    getStudentGrades(studentId) {
        return this.gradesService.getStudentGrades(studentId);
    }
};
exports.GradesController = GradesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "addGrade", null);
__decorate([
    (0, common_1.Patch)(':gradeId'),
    __param(0, (0, common_1.Param)('gradeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "updateGrade", null);
__decorate([
    (0, common_1.Delete)(':gradeId'),
    (0, roles_decorator_1.Roles)('ADMIN', 'TEACHER'),
    __param(0, (0, common_1.Param)('gradeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "deleteGrade", null);
__decorate([
    (0, common_1.Get)('student/:studentId'),
    (0, roles_decorator_1.Roles)('ADMIN', 'TEACHER'),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "getGradesByStudent", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "getAllGrades", null);
__decorate([
    (0, common_1.Get)('my-grades'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('STUDENT'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "getMyGrades", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('TEACHER'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "giveGrade", null);
__decorate([
    (0, common_1.Get)(':studentId'),
    (0, roles_decorator_1.Roles)('ADMIN', 'TEACHER', 'PARENT', 'STUDENT'),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GradesController.prototype, "getStudentGrades", null);
exports.GradesController = GradesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('TEACHER', 'ADMIN'),
    (0, common_1.Controller)('grades'),
    __metadata("design:paramtypes", [grades_service_1.GradesService])
], GradesController);
//# sourceMappingURL=grades.controller.js.map