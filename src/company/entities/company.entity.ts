import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../../user/user.entity';

@Entity()
export class Company {
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

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @Column()
  status: string;
}
