import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/User.entity';
import { Investment } from '../entities/Investment.entity';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column('text')
  description!: string;

  @Field()
  @Column('decimal')
  fundingGoal!: number;

  @Field()
  @Column('decimal')
  currentFunding!: number;

  @Field()
  @Column('decimal')
  funding!: number;

  @Field()
  @Column()
  category!: string;

  @Field(() => User)
  @ManyToOne(() => User)
  founder!: User;

  @Field(() => [Investment])
  @OneToMany(() => Investment, (investment) => investment.project)
  investments!: Investment[];

  @Field()
  @CreateDateColumn()
  createdAt!: Date;
}