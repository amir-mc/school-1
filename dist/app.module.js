"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
const class_module_1 = require("./class/class.module");
const teacher_module_1 = require("./teacher/teacher.module");
const student_module_1 = require("./student/student.module");
const parent_module_1 = require("./parent/parent.module");
const teachers_module_1 = require("./teachers/teachers.module");
const grades_module_1 = require("./grades/grades.module");
const parents_module_1 = require("./parents/parents.module");
const students_module_1 = require("./students/students.module");
const schedules_module_1 = require("./schedules/schedules.module");
const messages_module_1 = require("./messages/messages.module");
const feedback_module_1 = require("./feedback/feedback.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            class_module_1.ClassModule,
            schedules_module_1.SchedulesModule,
            teacher_module_1.TeacherModule,
            teachers_module_1.TeachersModule,
            students_module_1.StudentsModule,
            student_module_1.StudentModule,
            grades_module_1.GradesModule,
            parents_module_1.ParentsModule,
            messages_module_1.MessagesModule,
            feedback_module_1.FeedbackModule,
            parent_module_1.ParentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map