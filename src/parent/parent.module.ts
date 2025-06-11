import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ParentController],
  providers: [ParentService, PrismaService],
})
export class ParentModule {}

