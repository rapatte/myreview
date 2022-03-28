import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MissionDomain } from '../../domain/mission/MissionDomain';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.

@Entity({ name: 'mission' })
export class MissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @ApiProperty()
  @Column({ name: 'profil' })
  profil!: string;
  @ApiProperty()
  @Column({ name: 'client' })
  client!: string;
  @ApiProperty()
  @Column({ name: 'address' })
  address!: string;
  @ApiProperty()
  @Column({ name: 'project' })
  project!: string;
  @ApiProperty()
  @Column({ name: 'duration' })
  duration!: string;
  @ApiProperty()
  @Column({ name: 'description' })
  description!: string;
  @ApiProperty()
  @Column({ name: 'stack' })
  stack!: string;
  @ApiProperty()
  @Column({ name: 'team_organisation' })
  team_organisation!: string;
}

export const fromDomainToEntity = (missionDomain: MissionDomain): any => {
  return { ...missionDomain };
};

export const fromEntityToDomain = (
  missionEntity: MissionEntity,
): MissionDomain => {
  return new MissionDomain(missionEntity);
};
