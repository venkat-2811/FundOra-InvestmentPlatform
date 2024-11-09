import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Query(() => Project)
  async project(@Args('id', { type: () => Int }) id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  @UseGuards(JwtAuthGuard)
  async createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
    @CurrentUser() user: any,
  ): Promise<Project> {
    return this.projectService.create(createProjectInput, user.id);
  }

  @Query(() => [Project])
  @UseGuards(JwtAuthGuard)
  async myProjects(@CurrentUser() user: any): Promise<Project[]> {
    return this.projectService.findByFounder(user.id);
  }
}