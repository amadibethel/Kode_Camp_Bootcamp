import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // GET /todos
  @Get()
  getTodos() {
    return this.todosService.findAll();
  }

  // GET /todos/:id
  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todosService.findOne(Number(id));
  }

  // POST /todos
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  // PUT /todos/:id
  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(Number(id), updateTodoDto);
  }

  // DELETE /todos/:id
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.remove(Number(id));
  }
}
