import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  status: string;
}
