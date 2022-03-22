import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_id: string;

  @Column()
  site_name: string;

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
  status: string;
}
