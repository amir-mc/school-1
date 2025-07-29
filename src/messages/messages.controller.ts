import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SendGroupMessageDto } from './dto/send-group-message.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}


  @UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Post('admin/messages')
sendGroupMessage(@Req() req, @Body() dto: SendGroupMessageDto) {
  return this.messagesService.sendGroupMessage(req.user.userId, dto);
}
@Patch('mark-as-read/:id')
@UseGuards(JwtAuthGuard)
async markAsRead(@Param('id') messageId: string, @Req() req) {
  const userId = req.user.userId;
  return this.messagesService.markAsRead(messageId, userId);
}
@Get('unread')
@UseGuards(JwtAuthGuard)
async getUnreadMessages(@Req() req) {
  const userId = req.user.userId;
  return this.messagesService.getUnreadMessages(userId);
}
@Delete(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
async deleteMessage(@Param('id') id: string) {
  return this.messagesService.deleteMessage(id);
}
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Get('sent')
getAdminSentMessages(@Req() req) {
  const adminUserId = req.user.userId;
  return this.messagesService.getMessagesSentByAdmin(adminUserId);
}
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Patch(':id')
updateMessage(
  @Param('id') messageId: string,
  @Body() body: { content: string },
  @Req() req,
) {
  return this.messagesService.updateMessage(messageId, body.content, req.user.userId);
}











  @Post()
  sendMessage(
    @Req() req,
    @Body() body: { toId?: string; content: string; isPublic?: boolean }
  ) {
    const fromId = req.user.userId;
    return this.messagesService.sendMessage(fromId, body.toId || null, body.content, body.isPublic);
  }

  @Get('inbox')
  getInbox(@Req() req) {
    return this.messagesService.getInbox(req.user.userId);
  }

  @Get('sent')
  getSentMessages(@Req() req) {
    return this.messagesService.getSentMessages(req.user.userId);
  }

  @Get('public')
  getPublicMessages() {
    return this.messagesService.getPublicMessages();
  }
}
