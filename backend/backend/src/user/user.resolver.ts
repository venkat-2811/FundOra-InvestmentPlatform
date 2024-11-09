import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/User.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User | null> {
    return this.userService.findOne(id);
  }
}