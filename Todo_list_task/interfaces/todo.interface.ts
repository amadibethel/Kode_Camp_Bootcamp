import { TodoStatus } from '../todo-status.enum';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
}
