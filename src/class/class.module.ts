import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [ClassController],
  providers: [ClassService, PrismaService],
})
export class ClassModule {}
