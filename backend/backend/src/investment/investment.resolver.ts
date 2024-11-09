import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { Investment } from '../entities/Investment.entity';
import { CreateInvestmentInput } from './dto/create-investment.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../entities/User.entity';

@Resolver(() => Investment)
export class InvestmentResolver {
  constructor(private readonly investmentService: InvestmentService) {}

  @Mutation(() => Investment)
  @UseGuards(JwtAuthGuard)
  async createInvestment(
    @Args('createInvestmentInput') createInvestmentInput: CreateInvestmentInput,
    @CurrentUser() user: User
  ): Promise<Investment> {
    return this.investmentService.create(createInvestmentInput, user.id);
  }

  @Query(() => [Investment])
  @UseGuards(JwtAuthGuard)
  async myInvestments(@CurrentUser() user: User): Promise<Investment[]> {
    return this.investmentService.findByUser(user.id);
  }
}