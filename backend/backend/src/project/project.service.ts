import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateProjectInput } from './dto/create-project.input';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findOne(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ['founder', 'investments'],
    });

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return project;
  }

  async findByFounder(founderId: number): Promise<Project[]> {
    return this.projectRepository.find({
      where: { founder: { id: founderId } },
      relations: ['investments'],
    });
  }

  async updateFunding(id: number, amount: number): Promise<Project> {
    const project = await this.findOne(id);
    project.funding += amount;
    return this.projectRepository.save(project);
  }
  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['founder', 'investments'],
    });
  }

  async create(createProjectInput: CreateProjectInput, createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }
}
