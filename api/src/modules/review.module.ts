import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from '../domain/review/review.service';
import { MissionController as ReviewController } from '../exposition/Mission/mission.controller';
import { MissionServiceAdapter as ReviewServiceAdapter } from '../exposition/Mission/mission.service.adapter';
import { MissionEntity as ReviewEntity } from '../infrastructure/Mission/mission.entity';
import { MissionRepositoryAdapter as ReviewRepositoryAdapter } from '../infrastructure/Mission/mission.repository.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity])],
  exports: [TypeOrmModule],
  controllers: [ReviewController],
  providers: [
    ReviewService,
    ReviewServiceAdapter,
    { provide: 'IReviewRepository', useClass: ReviewRepositoryAdapter },
    { provide: 'IReviewService', useClass: ReviewService },
  ],
})
export class ReviewModule {}
