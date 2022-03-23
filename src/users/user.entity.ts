import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user-role.entity';
import { UserSite } from './user-site.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

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

  @Column()
  company_id: string;

  @Column()
  status: string;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRole: UserRole[];

  @OneToMany(() => UserSite, (userSite) => userSite.user)
  userSite: UserSite[];
}
