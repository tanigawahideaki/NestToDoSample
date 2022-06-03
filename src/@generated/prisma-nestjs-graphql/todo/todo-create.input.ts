import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TodoCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  taskName!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  description!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  deadline!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
