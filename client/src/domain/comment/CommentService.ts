import { Comment } from './comment';
import { ICommentRepository } from './comment.irepository';

export const CommentService = (
  repository: ICommentRepository,
): ICommentRepository => ({
  updateComment: (id, data): Promise<Comment> => {
    return repository.updateComment(id, data);
  },
  deleteComment: (id): Promise<string> => {
    return repository.deleteComment(id);
  },
  addComment: (review: Comment): Promise<Comment> => {
    return repository.addComment(review);
  },

  commentFiltred: (keywords: string[]): Promise<Comment[]> => {
    return repository.commentFiltred(keywords);
  },
  getCommentsReview: (id: string): Promise<Comment[]> => {
    return repository.getCommentsReview(id);
  },
});
