import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  // GET /todos
  findAll(): Todo[] {
    return this.todos;
  }

  // GET /todos/:id
  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  // POST /todos
  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      ...createTodoDto,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  // PUT /todos/:id
  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);

    Object.assign(todo, updateTodoDto);

    return todo;
  }

  // DELETE /todos/:id
  remove(id: number): { message: string } {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    this.todos.splice(index, 1);

    return {
      message: `Todo with ID ${id} deleted successfully`,
    };
  }
}
