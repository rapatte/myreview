export class CommentDomain {
  private id;
  private content;
  private author;
  private date;
  private reviewId;

  constructor({
    id,
    content,
    author,
    date,
    reviewId,
  }: {
    id?: string;
    content: string;
    author: string;
    date: any;
    reviewId: string;
  }) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.date = date;
    this.reviewId = reviewId;
  }

  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public get getContent(): string {
    return this.content;
  }
  public set setContent(value: string) {
    this.content = value;
  }
  public get getAuthor(): string {
    return this.author;
  }
  public set setAuthor(value: string) {
    this.author = value;
  }
  public get getDate(): string {
    return this.date;
  }
  public set setDate(value: string) {
    this.date = value;
  }
  public get getReviewId(): string {
    return this.reviewId;
  }
  public set setReviewId(value: string) {
    this.reviewId = value;
  }
}
