export class UserDomain {
  private id;
  private username;
  private password;
  private role;

  constructor({
    id,
    username,
    password,
    role,
  }: {
    id?: string;
    username: string;
    password: string;
    role: string;
  }) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
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
}
