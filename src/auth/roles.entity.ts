import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { UserRoles } from './user-roles.entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @OneToMany(() => UserRoles, (userRoles) => userRoles.roles)
  userRoles: UserRoles[];
}
