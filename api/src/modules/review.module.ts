import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from '../domain/review/review.service';
import { ReviewController } from '../exposition/review/review.controller';
import { ReviewServiceAdapter } from '../exposition/review/review.service.adapter';
import { ReviewEntity } from '../infrastructure/review/review.entity';
import { ReviewRepositoryAdapter } from '../infrastructure/review/review.repository.adapter';

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
