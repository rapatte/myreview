import { Injectable } from '@nestjs/common';
import { CommentDomain } from '../../domain/comment/comment.domain';
import { CommentService } from '../../domain/comment/comment.service';
import { Comment } from '../../types/Comment';

@Injectable()
export class CommentServiceAdapter {
  private commentService: CommentService;
  constructor(commentService: CommentService) {
    this.commentService = commentService;
  }

  public async save(comment: Comment): Promise<CommentDomain> {
    const commentDomain = new CommentDomain(comment);
    return this.commentService.save(commentDomain);
  }
  public async getAll(): Promise<CommentDomain[]> {
    return this.commentService.getAll();
  }
  public async getOne(commentId: string): Promise<CommentDomain> {
    return this.commentService.getOne(commentId);
  }
  public async remove(commentId: string): Promise<string> {
    return this.commentService.remove(commentId);
  }
  public async update(
    commentId: string,
    comment: Partial<CommentDomain>,
  ): Promise<CommentDomain> {
    return this.commentService.update(commentId, comment);
  }
  public async search(keywords: string[]): Promise<CommentDomain[]> {
    return this.commentService.search(keywords);
  }
  public async getCommentsOfOneReview(
    reviewId: string,
  ): Promise<CommentDomain[]> {
    return this.commentService.getCommentsOfOneReview(reviewId);
  }
}
