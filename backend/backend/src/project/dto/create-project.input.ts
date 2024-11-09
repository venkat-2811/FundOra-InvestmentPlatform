import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @Field()
  @IsNotEmpty()
  title!: string;

  @Field()
  @IsNotEmpty()
  description!: string;

  @Field()
  @IsNumber()
  @Min(0)
  fundingGoal!: number;

  @Field()
  @IsNotEmpty()
  category!: string;
}