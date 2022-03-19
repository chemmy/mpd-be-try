import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  role_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userRoles)
  user: User;
}
