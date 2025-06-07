import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() dto: { userId: string; classId: string; parentId: string }) {
    return this.studentsService.createStudent(dto);
  }

  @Get()
  @Roles('ADMIN', 'TEACHER')
  getAll() {
    return this.studentsService.getAll();
  }
}
