import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from '../domain/comment/comment.service';
import { CommentController } from '../exposition/comment/comment.controller';
import { CommentServiceAdapter } from '../exposition/comment/comment.service.adapter';
import { CommentEntity } from '../infrastructure/comment/comment.entity';
import { CommentRepositoryAdapter } from '../infrastructure/comment/comment.repository.adapter';
import { AuthModule } from './auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([CommentEntity])],
  exports: [TypeOrmModule],
  controllers: [CommentController],
  providers: [
    CommentService,
    CommentServiceAdapter,
    { provide: 'ICommentRepository', useClass: CommentRepositoryAdapter },
    { provide: 'ICommentService', useClass: CommentService },
  ],
})
export class CommentModule {}
