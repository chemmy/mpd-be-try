import { Password } from './password/password.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { User } from './user/user.entity';
import { UserRole } from './user/user-role.entity';
import { UserSite } from './user/user-site.entity';
=======
import { User } from './users/user.entity';
>>>>>>> develop
import { Role } from './auth/role.entity';
import { CompanySite } from './company/entities/company-site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
<<<<<<< HEAD
    @InjectRepository(UserRole) private userRoleRepo: Repository<UserRole>,
    @InjectRepository(UserSite) private userSiteRepo: Repository<UserSite>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
    @InjectRepository(CompanySite) private siteRepo: Repository<CompanySite>,
    @InjectRepository(Password) private passwordRepo: Repository<Password>,
=======
    @InjectRepository(Role) private rolesRepo: Repository<Role>,
    @InjectRepository(CompanySite) private sitesRepo: Repository<CompanySite>,
>>>>>>> develop
  ) {}

  async findOne(condition: any): Promise<User> {
    return this.userRepo.findOne(condition);
  }

  async update(id: number, data: any): Promise<any> {
    return this.userRepo.update(id, data);
  }
}
