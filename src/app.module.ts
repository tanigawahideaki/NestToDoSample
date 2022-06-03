import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { TodosModule } from './todos/todos.module';
import { TodosService } from './todos/todos.service';
import { TodosResolver } from './todos/todos.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, TodosService, TodosResolver],
})
export class AppModule {}
