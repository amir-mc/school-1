import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @Roles('ADMIN', 'TEACHER')
  send(@Body() dto: { senderId: string; receiverId?: string; text: string }) {
    return this.messagesService.sendMessage(dto);
  }

  @Get(':userId')
  @Roles('ADMIN', 'TEACHER', 'STUDENT', 'PARENT')
  get(@Param('userId') userId: string) {
    return this.messagesService.getMessagesForUser(userId);
  }
}
