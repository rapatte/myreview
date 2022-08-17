import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CommentDomain } from '../../domain/comment/comment.domain';
import { date } from '../../utils/funcs';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @ApiProperty()
  @Column({ name: 'content' })
  content!: string;
  @ApiProperty()
  @Column({ name: 'author' })
  author!: string;
  @ApiProperty()
  @Column({
    name: 'date',
    default: date(),
  })
  date!: string;
  @ApiProperty()
  @Column({ name: 'reviewId' })
  reviewId!: string;
}

export const fromDomainToEntity = (
  commentDomain: CommentDomain,
): CommentEntity => {
  const result = new CommentEntity();
  result.content = commentDomain.getContent;
  result.author = commentDomain.getAuthor;
  result.date = commentDomain.getDate;
  result.reviewId = commentDomain.getReviewId;
  return result;
};

export const fromEntityToDomain = (
  commentEntity: CommentEntity,
): CommentDomain => {
  return new CommentDomain(commentEntity);
};
