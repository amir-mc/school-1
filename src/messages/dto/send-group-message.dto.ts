import { Role } from "generated/prisma";
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class SendGroupMessageDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  toRoles?: Role[]; // مثلاً ['STUDENT', 'TEACHER']

  @IsOptional()
  @IsArray()
  toUserIds?: string[]; // لیست کاربرهای خاص

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
