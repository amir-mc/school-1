import { Controller, Post, Body, UseGuards, Get, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { AdminService } from './admin.service';
import { Roles } from 'src/auth/roles.decorator';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AdminController {
  constructor(
    private readonly usersService: UsersService,
    private readonly adminService: AdminService // ✅ این خط اضافه شده
  ) {}

  @Get('users')
  getAllUsers() {
    return this.adminService.getAllUsers(); // ✅ حالا از adminService استفاده می‌کنیم
  }

  @Post('users')
  createUser(@Body() dto: { name: string; username: string; password: string; role: string }) {
    return this.usersService.createUser(dto);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(id);
  }

  @Get('users/:id')
getUserById(@Param('id') id: string) {
  return this.adminService.getUserById(id);
}

  @Patch('users/:id')
updateUser(
  @Param('id') id: string,
  @Body() dto: { name?: string; username?: string; password?: string; role?: string },
) {
  return this.adminService.updateUser(id, dto);
}
}
