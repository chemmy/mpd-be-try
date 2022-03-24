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
}
