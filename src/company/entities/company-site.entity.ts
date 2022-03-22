import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserSite } from '../../users/user-site.entity';

@Entity()
export class CompanySite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  region: string;

  @Column()
  address_line_1: string;

  @Column()
  address_line_2: string;

  @Column()
  post_code: string;

  @Column()
  contact_firstname: string;

  @Column()
  contact_lastname: string;

  @Column()
  contact_number: string;

  @Column()
  email: string;

  @Column()
  type: string;

  @Column()
  is_supply: boolean;

  @Column()
  is_demand: boolean;

  @Column()
  status: string;

  @OneToMany(() => UserSite, (userSite) => userSite.companySite)
  userSite: UserSite[];
}
