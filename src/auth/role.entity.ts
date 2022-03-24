import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
