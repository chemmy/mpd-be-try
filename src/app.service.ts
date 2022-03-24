import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';
import { Role } from './auth/role.entity';
import { CompanySite } from './company/entities/company-site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Role) private rolesRepo: Repository<Role>,
    @InjectRepository(CompanySite) private sitesRepo: Repository<CompanySite>,
  ) {}

  async findOne(condition: any): Promise<User> {
    return this.userRepo.findOne(condition);
  }

  async update(id: number, data: any): Promise<any> {
    return this.userRepo.update(id, data);
  }
}
