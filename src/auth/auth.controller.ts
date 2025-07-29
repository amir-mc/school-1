import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
      console.log('Login route triggered', body); 
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) throw new UnauthorizedException('نام کاربری یا رمز اشتباه است');
    return this.authService.login(user);
  }
}
