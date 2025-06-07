import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

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
