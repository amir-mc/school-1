import { Controller, Post, Get, Param, Body, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

// src/parents/parents.controller.ts
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('PARENT')
@Controller('parent')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get('grades')
  async getChildrenGrades(@Req() req) {
    const userId = req.user.userId;
    return this.parentsService.getChildrenGrades(userId);
  }
}
