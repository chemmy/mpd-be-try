import { User } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CompanySite } from '../company/entities/company-site.entity';

@Entity()
export class UserSite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.userSite, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => CompanySite, (site) => site.userSite, {
    onDelete: 'SET NULL',
  })
  companySite: CompanySite;
}
