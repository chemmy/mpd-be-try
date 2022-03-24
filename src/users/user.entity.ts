import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../auth/role.entity';
import { Company } from '../company/entities/company.entity';
import { CompanySite } from '../company/entities/company-site.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  contact_number: string;

  @Column()
  registration_notes: string;

  @ManyToOne(() => Company, (company) => company.users, {
    onDelete: 'SET NULL',
  })
  company: Company;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @ManyToMany(() => CompanySite, (company_site) => company_site.users)
  @JoinTable({ name: 'user_sites' })
  company_sites: CompanySite[];

  @Column()
  status: string;
}
