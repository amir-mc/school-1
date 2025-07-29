// src/feedback/feedback.controller.ts
import { Controller, Post, Body, UseGuards, Req, Get, Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @Roles('PARENT')
  create(@Req() req, @Body() dto: CreateFeedbackDto) {
    const parentId = req.user.parentId;
    return this.feedbackService.create(parentId, dto);
  }

  @Get(':teacherId')
  @Roles('TEACHER', 'ADMIN')
  getFeedbacks(@Param('teacherId') teacherId: string) {
    return this.feedbackService.getTeacherFeedback(teacherId);
  }
}
