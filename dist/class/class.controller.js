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
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const class_service_1 = require("./class.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let ClassController = class ClassController {
    classService;
    constructor(classService) {
        this.classService = classService;
    }
    create(body) {
        return this.classService.createClass(body);
    }
    findAll() {
        return this.classService.getAllClasses();
    }
    findOne(id) {
        return this.classService.getClassById(id);
    }
    update(id, body) {
        return this.classService.updateClass(id, body);
    }
    remove(id) {
        return this.classService.deleteClass(id);
    }
    addTeacherToClass(classId, teacherId) {
        return this.classService.addTeacherToClass(classId, teacherId);
    }
    removeTeacherFromClass(classId, teacherId) {
        return this.classService.removeTeacherFromClass(classId, teacherId);
    }
    addStudentToClass(classId, studentId) {
        return this.classService.addStudentToClass(classId, studentId);
    }
};
exports.ClassController = ClassController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':classId/teachers/:teacherId'),
    __param(0, (0, common_1.Param)('classId')),
    __param(1, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "addTeacherToClass", null);
__decorate([
    (0, common_1.Delete)(':classId/teachers/:teacherId'),
    __param(0, (0, common_1.Param)('classId')),
    __param(1, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "removeTeacherFromClass", null);
__decorate([
    (0, common_1.Post)(':classId/students/:studentId'),
    __param(0, (0, common_1.Param)('classId')),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "addStudentToClass", null);
exports.ClassController = ClassController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Controller)('admin/classes'),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
//# sourceMappingURL=class.controller.js.map