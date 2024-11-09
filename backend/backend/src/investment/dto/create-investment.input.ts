import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { IsNumber, Min } from 'class-validator';

@InputType()
export class CreateInvestmentInput {
  @Field(() => Float)
  @IsNumber()
  @Min(0)
  amount!: number;

  @Field(() => Int)
  @IsNumber()
  projectId!: number;
}