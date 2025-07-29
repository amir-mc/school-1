import { Controller, Post, Get, Body, Param, UseGuards, Patch, Delete, Req } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}
  // 👤 ADMIN — CRUD کامل
  @Post()
  @Roles('ADMIN')
  create(@Body() body: any) {
    return this.schedulesService.create(body);
  }

  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get('class/:classId')
  @Roles('ADMIN')
  findByClass(@Param('classId') classId: string) {
    return this.schedulesService.findByClass(classId);
  }

  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.schedulesService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(id);
  }

  // ✅ TEACHER - برنامه کلاس‌هایی که تدریس می‌کنه
  @Get('me/teacher')
  @Roles('TEACHER')
  async getMyTeachingSchedule(@Req() req) {
    const userId = req.user.userId;
    return this.schedulesService.getTeacherSchedules(userId);
  }

  // ✅ STUDENT - برنامه کلاسی خودش
  @Get('me/student')
  @Roles('STUDENT')
  async getMyClassSchedule(@Req() req) {
    const userId = req.user.userId;
    return this.schedulesService.getStudentSchedule(userId);
  }
}