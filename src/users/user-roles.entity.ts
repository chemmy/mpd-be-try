import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../auth/roles.entity';

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  role_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userRoles, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => Roles, (roles) => roles.userRoles, { onDelete: 'SET NULL' })
  roles: Roles;
}
