import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserDomain } from '../../domain/user/user.domain';
import { Exclude } from 'class-transformer';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @ApiProperty()
  @Column({ name: 'username' })
  username!: string;
  @ApiProperty()
  @Column({ name: 'password' })
  password!: string;
  @ApiProperty()
  @Column({ name: 'role', default: 'member' })
  role!: string;
  @Column({ nullable: true })
  public currentHashedRefreshToken?: string;
}

export const fromDomainToEntity = (userDomain: UserDomain): UserEntity => {
  const result = new UserEntity();
  result.id = userDomain.getId;
  result.username = userDomain.getUsername;
  result.password = userDomain.getPassword;
  result.password = userDomain.getPassword;
  result.role = userDomain.getRole;
  result.currentHashedRefreshToken = userDomain.getCurrentHashedRefreshToken;
  return result;
};

export const fromEntityToDomain = (userEntity: UserEntity): UserDomain => {
  return new UserDomain(userEntity);
};
