import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { UserRole } from '../user/user-role.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRole: UserRole[];
}
