import { CommentDomain } from './comment.domain';

export interface ICommentRepository {
  save(comment: CommentDomain): Promise<CommentDomain>;
  getAll(): Promise<CommentDomain[]>;
  remove(commentId: string): Promise<string>;
  update(
    commentId: string,
    comment: Partial<CommentDomain>,
  ): Promise<CommentDomain>;
  getOne(commentId: string): Promise<CommentDomain>;
  search(keywords: string[]): Promise<CommentDomain[]>;
}
