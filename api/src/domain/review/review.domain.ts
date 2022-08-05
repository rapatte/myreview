export class ReviewDomain {
  private id;
  private title;
  private score;
  private poster;
  private synopsis;
  private trailer;
  private casting;
  private genre;
  private category;

  constructor({
    id,
    title,
    score,
    poster,
    synopsis,
    trailer,
    casting,
    genre,
    category,
  }: {
    id?: string;
    title: string;
    score: number;
    poster: string;
    synopsis: string;
    trailer: string;
    casting: string;
    genre: string;
    category: string;
  }) {
    this.id = id;
    this.title = title;
    this.score = score;
    this.poster = poster;
    this.synopsis = synopsis;
    this.trailer = trailer;
    this.casting = casting;
    this.genre = genre;
    this.category = category;
  }

  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public get getPoster(): string {
    return this.poster;
  }
  public set setPoster(value: string) {
    this.poster = value;
  }
  public get getScore(): number {
    return this.score;
  }
  public set setScore(value: number) {
    this.score = value;
  }

  public get getTitle(): string {
    return this.title;
  }
  public set setTitle(value: string) {
    this.title = value;
  }

  public get getSynopsis(): string {
    return this.synopsis;
  }
  public set setSynopsis(value: string) {
    this.synopsis = value;
  }

  public get getTrailer(): string {
    return this.trailer;
  }
  public set setTrailer(value: string) {
    this.trailer = value;
  }

  public get getCasting(): string {
    return this.casting;
  }
  public set setCasting(value: string) {
    this.casting = value;
  }

  public get getGenre(): string {
    return this.genre;
  }
  public set setGenre(value: string) {
    this.genre = value;
  }

  public get getCategory(): string {
    return this.category;
  }
  public set setCategory(value: string) {
    this.category = value;
  }
}
