import { Inject, Injectable } from '@nestjs/common';
import { CommentDomain } from './comment.domain';
import { ICommentRepository } from './comment.irepository';
import { ICommentService } from './comment.iservice';

@Injectable()
export class CommentService implements ICommentService {
  private commentRepositoryAdapter: ICommentRepository;
  constructor(
    @Inject('ICommentRepository') commentAdapter: ICommentRepository,
  ) {
    this.commentRepositoryAdapter = commentAdapter;
  }

  async save(comment: CommentDomain) {
    return await this.commentRepositoryAdapter.save(comment);
  }
  async getAll() {
    const comments = await this.commentRepositoryAdapter.getAll();
    if (comments.length === 0) {
      throw new Error('No comments.');
    }
    return comments;
  }
  async getOne(commentId: string) {
    const comment = await this.commentRepositoryAdapter.getOne(commentId);
    if (!comment) {
      throw new Error('Comment not found.');
    }
    return comment;
  }
  async remove(commentId: string) {
    const comment = await this.commentRepositoryAdapter.getOne(commentId);
    if (!comment) {
      throw new Error('Comment not found or already deleted.');
    }
    return await this.commentRepositoryAdapter.remove(commentId);
  }
  async update(commentId: string, comment: Partial<CommentDomain>) {
    const commentFound = await this.commentRepositoryAdapter.getOne(commentId);
    if (!commentFound) {
      throw new Error('Comment not found.');
    }
    if (comment === commentFound) {
      throw new Error('Identical comment or already modified.');
    }
    return await this.commentRepositoryAdapter.update(commentId, comment);
  }
  async search(keywords: string[]) {
    const comments = await this.commentRepositoryAdapter.search(keywords);
    if (comments.length === 0) {
      throw new Error('No comments found.');
    }
    return comments;
  }
}
