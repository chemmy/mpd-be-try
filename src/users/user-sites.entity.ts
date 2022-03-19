import { User } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sites } from '../auth/sites.entity';

@Entity()
export class UserSites {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userSites, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => Sites, (sites) => sites.userSites, { onDelete: 'SET NULL' })
  sites: Sites;
}
