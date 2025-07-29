// src/teachers/teachers.module.ts
import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TeachersService],
  controllers: [TeachersController],
})
export class TeachersModule {}
