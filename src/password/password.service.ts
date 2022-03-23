import { Password } from './password.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(Password)
    private readonly passwordRepository: Repository<Password>,
  ) {}

  async create(body: any) {
    return this.passwordRepository.save(body);
  }

  async findOne(data: any) {
    return this.passwordRepository.findOne(data);
  }
}
