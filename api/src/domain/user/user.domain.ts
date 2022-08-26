export class UserDomain {
  private id;
  private username;
  private password;
  private role;
  private currentHashedRefreshToken;

  constructor({
    id,
    username,
    password,
    role,
    currentHashedRefreshToken,
  }: {
    id?: string;
    username: string;
    password: string;
    role: string;
    currentHashedRefreshToken?: string;
  }) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.currentHashedRefreshToken = currentHashedRefreshToken;
  }

  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public get getRole(): string {
    return this.role;
  }
  public set setRole(value: string) {
    this.role = value;
  }
  public get getPassword(): string {
    return this.password;
  }
  public set setPassword(value: string) {
    this.password = value;
  }

  public get getUsername(): string {
    return this.username;
  }
  public set setUsername(value: string) {
    this.username = value;
  }

  public get getCurrentHashedRefreshToken(): string {
    return this.currentHashedRefreshToken;
  }
  public set setCurrentHashedRefreshToken(value: string) {
    this.currentHashedRefreshToken = value;
  }
}
