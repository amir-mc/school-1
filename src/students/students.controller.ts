import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('STUDENT')
@Controller('student')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('grades')
  getMyGrades(@Req() req) {
    return this.studentService.getMyGrades(req.user.userId);
  }
}


