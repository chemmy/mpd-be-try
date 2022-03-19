import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {
      username,
      password,
      firstname,
      lastname,
      contact_number,
      registration_notes,
      company_id,
      status,
    } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      firstname,
      lastname,
      contact_number,
      registration_notes,
      company_id,
      status,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // 23505 error code for duplicate username
        throw new ConflictException('Username Already Exist');
      } else {
        throw new InternalServerErrorException();
      }
      console.log(error.code);
    }
  }
}
