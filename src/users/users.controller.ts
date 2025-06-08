import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
// برای تست اولیه کامنت کن:
// @UseGuards(JwtAuthGuard, RolesGuard)
 @UseGuards(JwtAuthGuard, RolesGuard)
 
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: { name: string; username: string; password: string; role: string }) { 
    return this.usersService.createUser(dto);
  }
 
  @Roles('ADMIN') // فقط ادمین‌ها می‌تونن همه کاربران رو ببینن
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
