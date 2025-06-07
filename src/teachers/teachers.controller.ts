import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post('assign-class')
  @Roles('ADMIN')
  assignClass(@Body() dto: { teacherId: string; classId: string }) {
    return this.teachersService.assignToClass(dto);
  }

  @Get()
  @Roles('ADMIN')
  getAll() {
    return this.teachersService.getAll();
  }
}
