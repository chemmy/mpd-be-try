import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/user.entity';

@Entity()
export class CompanySite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

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

  @ManyToMany(() => User, (user) => user.company_sites)
  users: User[];

  @Column()
  status: string;
}
