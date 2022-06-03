import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    taskName = "taskName",
    description = "description",
    deadline = "deadline",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })
