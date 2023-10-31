import { TaskStatus } from '../task.entity';
import {
  IsNotEmpty,
  IsString,
  Min,
  Max,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(156)
  title: string;

  @IsString()
  description: string;
}
export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
  status?: TaskStatus;
}
