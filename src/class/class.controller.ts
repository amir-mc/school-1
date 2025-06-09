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
  create(@Body() body: { name: string; grade: number }) {
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
}
