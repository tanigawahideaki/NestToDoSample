import { Injectable } from '@nestjs/common';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { PrismaService } from 'src/prisma.service';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async findFirst(args: FindFirstTodoArgs): Promise<Todo | null> {
    return this.prisma.todo.findFirst(args);
  }

  async findUnique(args: FindUniqueTodoArgs): Promise<Todo | null> {
    return this.prisma.todo.findUnique(args);
  }

  async createTodo(args: CreateOneTodoArgs): Promise<Todo | null> {
    return this.prisma.todo.create(args);
  }
}
