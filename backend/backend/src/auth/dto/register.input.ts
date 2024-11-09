import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength, IsEnum } from 'class-validator';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MinLength(6)
  password!: string;

  @Field(() => String)
  @IsEnum(UserRole)
  role!: UserRole;
}