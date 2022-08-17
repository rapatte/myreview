import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDomain } from '../../domain/comment/comment.domain';
import { ICommentRepository } from '../../domain/comment/comment.irepository';
import Utils from '../../utils/funcs';
import {
  CommentEntity,
  fromDomainToEntity,
  fromEntityToDomain,
} from './comment.entity';

@Injectable()
export class CommentRepositoryAdapter implements ICommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentEntityRepository: Repository<CommentEntity>,
  ) {}

  async save(comment: CommentDomain): Promise<CommentDomain> {
    const entityConvertedComment = fromDomainToEntity(comment);
    const savedComment = await this.commentEntityRepository.save(
      entityConvertedComment,
    );
    const domainConvertedUser = fromEntityToDomain(savedComment);
    return domainConvertedUser;
  }

  async getAll(): Promise<CommentDomain[]> {
    const commentList = await this.commentEntityRepository.find();
    const domainConvertedList = commentList.map(
      (comment) => new CommentDomain(comment),
    );
    return domainConvertedList;
  }

  async remove(id: string): Promise<string> {
    await this.commentEntityRepository.delete(id);
    return `Comment deleted.`;
  }

  async update(
    id: string,
    comment: Partial<CommentDomain>,
  ): Promise<CommentDomain> {
    const commentFound = await this.commentEntityRepository.findOne({
      id,
    });
    const commentUpdated = await this.commentEntityRepository.save({
      ...commentFound,
      ...comment,
    });
    const commentConvertedUser = fromEntityToDomain(commentUpdated);
    return commentConvertedUser;
  }

  async getOne(id: string): Promise<any> {
    const commentFound = await this.commentEntityRepository.findOne({
      id,
    });
    const domainConvertedcomment = fromEntityToDomain(commentFound);
    return domainConvertedcomment;
  }

  async search(keywords: string[]): Promise<CommentDomain[]> {
    const request = await this.searchByElement(keywords);

    const comments: CommentEntity[] = Utils.removeDuplicateObject(request);

    return comments.map((comment) => new CommentDomain(comment));
  }

  async searchByElement(array: Array<any>) {
    const elements: any[] = [];
    await Promise.all(
      array.map(async (element) => {
        const request: Array<string | number | object> =
          await this.commentEntityRepository.find({
            where: {
              author: element,
            },
          });
        request.forEach((req) => elements.push(req));
      }),
    );
    return elements;
  }
  async getCommentsOfOneReview(reviewId: string) {
    const commentList = await this.commentEntityRepository.find({
      where: { reviewId: reviewId },
    });
    const domainConvertedList = commentList.map(
      (comment) => new CommentDomain(comment),
    );
    return domainConvertedList;
  }
}
