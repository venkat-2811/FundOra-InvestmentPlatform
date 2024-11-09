import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Investment } from './Investment.entity';
import { IsEmail, IsIn } from 'class-validator';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  @IsIn(['investor', 'founder'])
  role!: string; // 'investor' or 'founder'

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => [Investment], { nullable: true })
  @OneToMany(() => Investment, (investment) => investment.user, {
    cascade: true,
  })
  investments!: Investment[];
}
