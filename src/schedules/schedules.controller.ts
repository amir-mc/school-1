import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  @Roles('ADMIN')
  set(@Body() dto: { classId: string; day: string; subject: string; startTime: string; endTime: string }) {
    return this.schedulesService.setSchedule(dto);
  }

  @Get(':classId')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  get(@Param('classId') classId: string) {
    return this.schedulesService.getSchedule(classId);
  }
}
