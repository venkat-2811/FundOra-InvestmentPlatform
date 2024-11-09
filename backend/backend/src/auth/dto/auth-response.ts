import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../entities/User.entity';

@ObjectType({ description: 'Authentication response' })
export class AuthResponse {
  @Field(() => String, { description: 'JWT access token' })
  accessToken!: string;

  @Field(() => User, { description: 'Authenticated user information' })
  user!: User;
}