import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../auth/role.entity';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  role_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userRole, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => Role, (role) => role.userRole, { onDelete: 'SET NULL' })
  role: Role;
}
