import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ClassModule } from './class/class.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { ParentModule } from './parent/parent.module';
import { TeachersModule } from './teachers/teachers.module';
import { GradesModule } from './grades/grades.module';
import { ParentsModule } from './parents/parents.module';
import { StudentsModule } from './students/students.module';
import { SchedulesModule } from './schedules/schedules.module';
import { MessagesModule } from './messages/messages.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    AdminModule,
    ClassModule,
    SchedulesModule,
    TeacherModule,
    TeachersModule,
    StudentsModule,
    StudentModule,
    GradesModule,
    ParentsModule,
    MessagesModule,
    FeedbackModule,
    ParentModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
