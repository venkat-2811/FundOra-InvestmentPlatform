import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentService } from './investment.service';
import { InvestmentResolver } from './investment.resolver';
import { Investment } from '../entities/Investment.entity';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Investment]),
    ProjectModule,
  ],
  providers: [InvestmentService, InvestmentResolver],
  exports: [InvestmentService],
})
export class InvestmentModule {}