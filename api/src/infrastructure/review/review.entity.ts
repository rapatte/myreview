import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ReviewDomain } from '../../domain/review/review.domain';
import { ColumnNumericTransformer } from '../../utils/funcs';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.

@Entity({ name: 'reviews' })
export class ReviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @ApiProperty()
  @Column({ name: 'title' })
  title!: string;
  @ApiProperty()
  @Column('numeric', {
    name: 'score',
    precision: 7,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  score!: number;
  @ApiProperty()
  @Column({ name: 'poster' })
  poster!: string;
  @ApiProperty()
  @Column({ name: 'synopsis' })
  synopsis!: string;
  @ApiProperty()
  @Column({ name: 'trailer' })
  trailer!: string;
  @ApiProperty()
  @Column({ name: 'casting', nullable: true })
  casting!: string;
  @ApiProperty()
  @Column({ name: 'genre', nullable: true })
  genre!: string;
  @ApiProperty()
  @Column({ name: 'category' })
  category!: string;
}

export const fromDomainToEntity = (
  reviewDomain: ReviewDomain,
): ReviewEntity => {
  const result = new ReviewEntity();
  result.title = reviewDomain.getTitle;
  result.score = reviewDomain.getScore;
  result.poster = reviewDomain.getPoster;
  result.synopsis = reviewDomain.getSynopsis;
  result.trailer = reviewDomain.getTrailer;
  result.casting = reviewDomain.getCasting;
  result.genre = reviewDomain.getGenre;
  result.category = reviewDomain.getCategory;

  return result;
};

export const fromEntityToDomain = (
  reviewEntity: ReviewEntity,
): ReviewDomain => {
  return new ReviewDomain(reviewEntity);
};
