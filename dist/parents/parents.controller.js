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
exports.ParentsController = void 0;
const common_1 = require("@nestjs/common");
const parents_service_1 = require("./parents.service");
const roles_decorator_1 = require("../auth/roles.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
let ParentsController = class ParentsController {
    parentsService;
    constructor(parentsService) {
        this.parentsService = parentsService;
    }
    async getChildrenGrades(req) {
        const userId = req.user.userId;
        return this.parentsService.getChildrenGrades(userId);
    }
};
exports.ParentsController = ParentsController;
__decorate([
    (0, common_1.Get)('grades'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParentsController.prototype, "getChildrenGrades", null);
exports.ParentsController = ParentsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('PARENT'),
    (0, common_1.Controller)('parent'),
    __metadata("design:paramtypes", [parents_service_1.ParentsService])
], ParentsController);
//# sourceMappingURL=parents.controller.js.map