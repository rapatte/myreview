import { Comment } from 'domain/comment/comment';
import { ICommentRepository } from 'domain/comment/comment.irepository';
import { CommentDTO } from './comment.dto';
import { Http } from 'infrastructure/util/Http';

export const commentRepository = (client: Http): ICommentRepository => ({
  updateComment: async (id, data) => {
    const commentUpdated = await client.patch<CommentDTO>(
      `/comments/${id}`,
      data,
    );
    return commentUpdated;
  },
  deleteComment: async id => {
    const commentDeleted = await client.delete<String>(`/comments/${id}`);
    return commentDeleted;
  },
  addComment: async (comment: Comment) => {
    const postComment = await client.post<CommentDTO>('/comments', comment);
    return postComment;
  },

  commentFiltred: async (keywords: string[]) => {
    const parameterizeArray = (key, arr) => {
      arr = arr.map(encodeURIComponent);
      return '?criteria=' + arr.join(`&${key}=`);
    };
    const url = '/comments/search/' + parameterizeArray('criteria', keywords);
    const commentFiltred = await client.get<CommentDTO[]>(url);
    return commentFiltred.map(
      (commentDTO): Comment => ({
        id: commentDTO.id,
        content: commentDTO.content,
        author: commentDTO.author,
        date: commentDTO.date,
        reviewId: commentDTO.reviewId,
      }),
    );
  },
  getCommentsReview: async (id: string) => {
    const comments = await client.get<CommentDTO[]>(`comments/of/${id}`);
    return comments;
  },
});
