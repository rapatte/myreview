import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CooperatorDomain } from '../../domain/cooperator/cooperator.domain';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.

@Entity({ name: 'cooperators' })
export class CooperatorEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @ApiProperty()
  @Column({ name: 'first_name' })
  firstName!: string;
  @ApiProperty()
  @Column({ name: 'last_name' })
  lastName!: string;
  @ApiProperty()
  @Column({ name: 'phone_number' })
  phoneNumber!: string;
  @ApiProperty()
  @Column({ name: 'email' })
  email!: string;
  @ApiProperty()
  @Column({ name: 'practice' })
  practice!: string;
  @ApiProperty()
  @Column({ name: 'm3', nullable: true })
  m3!: string;
  @ApiProperty()
  @Column({ name: 'mentor', nullable: true })
  mentor!: string;
  @ApiProperty()
  @Column({ type: 'boolean', name: 'disponible', default: false })
  disponible!: boolean;
}

export const fromDomainToEntity = (
  cooperatorDomain: CooperatorDomain,
): CooperatorEntity => {
  const result = new CooperatorEntity();
  result.firstName = cooperatorDomain.getFirstName;
  result.lastName = cooperatorDomain.getLastName;
  result.phoneNumber = cooperatorDomain.getPhoneNumber;
  result.email = cooperatorDomain.getEmail;
  result.practice = cooperatorDomain.getPractice;
  result.m3 = cooperatorDomain.getM3;
  result.mentor = cooperatorDomain.getMentor;
  result.disponible = cooperatorDomain.getStatus;

  return result;
};

export const fromEntityToDomain = (
  cooperatorEntity: CooperatorEntity,
): CooperatorDomain => {
  return new CooperatorDomain(cooperatorEntity);
};
