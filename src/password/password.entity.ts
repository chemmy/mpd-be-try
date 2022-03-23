import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('password_reset')
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  token: string;
}
