// src/teacher/teacher.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() body: { userId: string }) {
    return this.teacherService.createTeacher(body.userId);
  }

  @Get()
  findAll() {
    return this.teacherService.getAllTeachers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.getTeacherById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.deleteTeacher(id);
  }
}
