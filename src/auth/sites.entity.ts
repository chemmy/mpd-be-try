import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserSites } from '../users/user-sites.entity';

@Entity()
export class Sites {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_id: string;

  @Column()
  address: string;

  @Column()
  contact_firstname: string;

  @Column()
  contact_lastname: string;

  @Column()
  contact_number: string;

  @Column()
  status: string;

  @OneToMany(() => UserSites, (userSites) => userSites.sites)
  userSites: UserSites[];
}
