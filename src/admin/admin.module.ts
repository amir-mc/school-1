import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UsersModule } from 'src/users/users.module';
import { AdminService } from './admin.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
   imports: [UsersModule, PrismaModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
