import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './User.entity';
import { Project } from '../project/project.entity';
@Entity()
@ObjectType()
export class Investment {
  @Field(() => Project)
  @ManyToOne(() => Project, (project: Project) => project.investments)
  project!: Project;

  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('decimal', { precision: 10, scale: 2 })
  amount!: number;

  @Field()
  @Column()
  projectId!: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.investments)
  user!: User;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;
}
