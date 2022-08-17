import { CommentDomain } from './comment.domain';

export interface ICommentService {
  save(comment: CommentDomain): Promise<CommentDomain>;
  getAll(): Promise<CommentDomain[]>;
  remove(commentId: string): Promise<string>;
  update(commentId: string, comment: CommentDomain): Promise<CommentDomain>;
  getOne(commentId: string): Promise<CommentDomain>;
  search(keywords: string[]): Promise<CommentDomain[]>;
}
