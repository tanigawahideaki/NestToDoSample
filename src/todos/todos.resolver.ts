import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => Todo)
  todo(@Args() args: FindFirstTodoArgs) {
    return this.todosService.findFirst(args);
  }

  @Mutation(() => Todo)
  async createTodo(@Args() args: CreateOneTodoArgs) {
    return this.todosService.createTodo(args);
  }
}
