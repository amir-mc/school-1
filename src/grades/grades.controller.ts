import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Patch,
  Delete,
  Req,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER', 'ADMIN') // ⬅️ اضافه کردن ADMIN
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

   @Post()
  async addGrade(
    @Body() body: { studentId: string; subject: string; value: number }
  ) {
    return this.gradesService.addGrade(body);
  }
  
@Patch(':gradeId')
updateGrade(
  @Param('gradeId') gradeId: string,
  @Body() body: { value?: number; subject?: string }
) {
  return this.gradesService.updateGrade(gradeId, body);
}
@Delete(':gradeId')
@Roles('ADMIN', 'TEACHER')
deleteGrade(@Param('gradeId') gradeId: string) {
  return this.gradesService.deleteGrade(gradeId);
}
@Get('student/:studentId')
@Roles('ADMIN', 'TEACHER')
getGradesByStudent(@Param('studentId') studentId: string) {
  return this.gradesService.getGradesByStudent(studentId);
}
@Get()
@Roles('ADMIN')
getAllGrades() {
  return this.gradesService.getAllGrades();
}
@Get('my-grades')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('STUDENT')
getMyGrades(@Req() req) {
  const userId = req.user.userId; // یا req.user.id بر اساس validate()
  return this.gradesService.getGradesByStudentUserId(userId);
}
























  @Post()
  @Roles('TEACHER')
  giveGrade(@Body() dto: { studentId: string; teacherId: string; subject: string; score: number }) {
    return this.gradesService.giveGrade(dto);
  }
  @Get(':studentId')
  @Roles('ADMIN', 'TEACHER', 'PARENT', 'STUDENT')
  getStudentGrades(@Param('studentId') studentId: string) {
    return this.gradesService.getStudentGrades(studentId);
  }
}
