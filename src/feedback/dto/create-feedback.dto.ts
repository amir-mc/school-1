// src/feedback/dto/create-feedback.dto.ts
import { IsUUID, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateFeedbackDto {
  @IsUUID()
  teacherId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  score: number;

  @IsOptional()
  @IsString()
  comment?: string;
}
