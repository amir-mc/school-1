import { Controller, Post, Body, UseGuards, Get, Delete, Param, Patch, Query, BadRequestException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { AdminService } from './admin.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'generated/prisma';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AdminController {
  constructor(
    private readonly usersService: UsersService,
    private readonly adminService: AdminService // ✅ این خط اضافه شده
  ) {}

  // @Get('users')
  // getAllUsers() {
  //   return this.adminService.getAllUsers(); // ✅ حالا از adminService استفاده می‌کنیم
  // }

  @Post('users')
  createUser(@Body() dto: { name: string; username: string; password: string; role: string ; classId?: string }) {
    
    return this.adminService.createUser(dto);
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
@Get('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
async findAll(
  @Query('query') query: string,
  @Query('role') role: string,
   @Query('classId') classId: string,
) {
  return this.adminService.findUsers({ query, role, classId });
}

@Get('classes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
findAllClasses() {
  return this.adminService.getAllClasses(); // ✅ حالا از سرویس استفاده می‌کنیم
}
@Get('users/count/students')
countStudents() {
  return this.adminService.countUsersByRole('STUDENT');
}

@Get('users/count/teachers')
countTeachers() {
  return this.adminService.countUsersByRole('TEACHER');
} 
 
@Get('users/count/parents')
countParents() {  
  return this.adminService.countUsersByRole('PARENT');
}

@Get('users/count/all')
async countAllUsers() {
  return this.adminService.countAllUsers();
}

  // آمار کلاس‌ها
  @Get('classes/count')
  async countClasses() {
    return this.adminService.countClasses();
  }



}
