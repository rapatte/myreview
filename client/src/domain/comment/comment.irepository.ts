import { Comment } from './comment';

export interface ICommentRepository {
  updateComment: (id: string, data: Comment) => Promise<Comment>;
  deleteComment: (id: string) => Promise<string>;
  addComment: (mission: Comment) => Promise<Comment>;
  commentFiltred: (keywords: string[]) => Promise<Comment[]>;
  getCommentsReview: (id: string) => Promise<Comment[]>;
}
