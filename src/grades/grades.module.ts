// src/grades/grades.module.ts
import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GradesController],
  providers: [GradesService, PrismaService],
})
export class GradesModule {}
