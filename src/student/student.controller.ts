// src/student/student.controller.ts
import { Controller, Post, Body, Get, UseGuards, Delete, Param, Patch } from '@nestjs/common';
import { StudentService } from './student.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

   @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(id);
  }

  @Patch(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() data: { classId?: string; parentId?: string }
  ) {
    return this.studentService.updateStudent(id, data);
  }

  @Post()
  create(@Body() body: { userId: string; parentId: string; classId: string }) {
    return this.studentService.createStudent(body.userId, body.parentId, body.classId);
  }

  @Get()
  findAll() {
    return this.studentService.getAllStudents();
  }
}
