import { commentRepository } from 'infrastructure/comment/comment.repository';
import { HttpAxios } from 'infrastructure/util/httpAxios';
import { CommentService } from 'domain/comment/CommentService';

const repository = commentRepository(HttpAxios);
const commentServices = CommentService(repository);
export default commentServices;
