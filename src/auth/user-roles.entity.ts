import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from './roles.entity';

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  role_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userRoles, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Roles, (roles) => roles.userRoles)
  roles: Roles;
}
