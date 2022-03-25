import { PasswordEntity } from './password.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(PasswordEntity)
    private readonly passwordRepository: Repository<PasswordEntity>,
  ) {}

  async create(body: any) {
    return this.passwordRepository.save(body);
  }

  async findOne(data: any) {
    return this.passwordRepository.findOne(data);
  }
}
