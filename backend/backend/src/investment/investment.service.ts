import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investment } from '../entities/Investment.entity';
import { CreateInvestmentInput } from './dto/create-investment.input';
import { ProjectService } from '../project/project.service';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment)
    private investmentRepository: Repository<Investment>,
    private projectService: ProjectService,
  ) {}

  async create(
    createInvestmentInput: CreateInvestmentInput,
    userId: number,
  ): Promise<Investment> {
    const investment = this.investmentRepository.create({
      ...createInvestmentInput,
      user: { id: userId },
    });

    await this.projectService.updateFunding(
      createInvestmentInput.projectId,
      createInvestmentInput.amount,
    );

    return this.investmentRepository.save(investment);
  }

  async findByUser(userId: number): Promise<Investment[]> {
    return this.investmentRepository.find({
      where: { user: { id: userId } },
      relations: ['project'],
    });
  }

  async findByProject(projectId: number): Promise<Investment[]> {
    return this.investmentRepository.find({
      where: { projectId: projectId },
      relations: ['user'],
    });
  }
}