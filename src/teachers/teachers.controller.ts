import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER')
@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

 @Get('classes')
  async getMyClasses(@Req() req) {
    const userId = req.user?.userId; // ✅ درست
    if (!userId) {
      throw new Error('توکن نامعتبر یا ناقص است.');
    }
    return this.teachersService.getClassesByTeacherUserId(userId);
  }

 @Get('my-students')
  async getStudents(@Req() req) {
    const userId = req.user?.userId; // ✅ اصلاح شد
    if (!userId) {
      throw new Error('توکن نامعتبر یا ناقص است.');
    }
    return this.teachersService.getStudentsByTeacher(userId);
  }

  @Get('me')
  getProfile(@Req() req: any) {
    return this.teachersService.getProfile(req.user.id);
  }
   
}
