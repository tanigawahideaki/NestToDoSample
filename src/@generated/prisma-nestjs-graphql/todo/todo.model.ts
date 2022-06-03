import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Todo {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @Validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsNotEmpty()'})
    taskName!: string;

    /**
     * @Validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsNotEmpty()'})
    description!: string;

    /**
     * @Validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsNotEmpty()'})
    deadline!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
