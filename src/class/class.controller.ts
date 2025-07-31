// src/class/class.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin/classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

@Post()
create(@Body() body: { name: string; grade: number; teacherIds?: string[] }) {
  return this.classService.createClass(body);
}

  @Get()
  findAll() {
    return this.classService.getAllClasses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.getClassById(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { name?: string; grade?: number }) {
    return this.classService.updateClass(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.deleteClass(id);
  }


  @Post(':classId/teachers/:teacherId')
addTeacherToClass(
  @Param('classId') classId: string,
  @Param('teacherId') teacherId: string
) {
  return this.classService.addTeacherToClass(classId, teacherId);
}

// DELETE /admin/classes/:classId/teachers/:teacherId
@Delete(':classId/teachers/:teacherId')
removeTeacherFromClass(
  @Param('classId') classId: string,   
  @Param('teacherId') teacherId: string,
) {
  return this.classService.removeTeacherFromClass(classId, teacherId);
}

@Post(':classId/students/:studentId')
addStudentToClass(
  @Param('classId') classId: string,
  @Param('studentId') studentId: string,
) {
  return this.classService.addStudentToClass(classId, studentId);
}


}
