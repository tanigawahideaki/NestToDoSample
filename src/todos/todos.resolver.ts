import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => Todo)
  todo(@Args() args: FindFirstTodoArgs) {
    return this.todosService.findFirst(args);
  }

  @Query(() => Todo)
  todoUniqu(@Args() args: FindUniqueTodoArgs) {
    return this.todosService.findUnique(args);
  }

  @Query(() => [Todo])
  findAll(@Args() args: FindManyTodoArgs) {
    return this.todosService.findAll(args);
  }

  @Mutation(() => Todo)
  async createTodo(@Args() args: CreateOneTodoArgs) {
    return this.todosService.createTodo(args);
  }

  @Mutation(() => Todo)
  async update(@Args() args: UpdateOneTodoArgs) {
    return this.todosService.update(args);
  }

  @Mutation(() => Todo)
  async delete(@Args() args: DeleteOneTodoArgs) {
    return this.todosService.delete(args);
  }
}
