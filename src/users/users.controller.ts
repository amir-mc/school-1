import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 @Roles('ADMIN')
create(@Body() dto: { name: string; username: string; password: string; role: string }) {
  return this.usersService.createUser(dto);
}
  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.usersService.findAll();
  }
}
