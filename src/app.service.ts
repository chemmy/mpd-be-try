import { Password } from './password/password.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './users/user.entity';
import { UserRole } from './users/user-role.entity';
import { UserSite } from './users/user-site.entity';
import { Role } from './auth/role.entity';
import { CompanySite } from './company/entities/company-site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(UserRole) private userRoleRepo: Repository<UserRole>,
    @InjectRepository(UserSite) private userSiteRepo: Repository<UserSite>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
    @InjectRepository(CompanySite) private siteRepo: Repository<CompanySite>,
    @InjectRepository(Password) private passwordRepo: Repository<Password>,
  ) {}

  async findOne(condition: any): Promise<User> {
    return this.userRepo.findOne(condition);
  }

  async update(id: number, data: any): Promise<any> {
    return this.userRepo.update(id, data);
  }
}
