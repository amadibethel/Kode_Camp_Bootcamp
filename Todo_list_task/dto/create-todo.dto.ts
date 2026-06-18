import { IsEnum, IsString } from 'class-validator';
import { TodoStatus } from '../todo-status.enum';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TodoStatus)
  status: TodoStatus;
}
