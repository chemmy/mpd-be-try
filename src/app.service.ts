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
    @InjectRepository(UserRole) private userRolesRepo: Repository<UserRole>,
    @InjectRepository(UserSite) private userSitesRepo: Repository<UserSite>,
    @InjectRepository(Role) private rolesRepo: Repository<Role>,
    @InjectRepository(CompanySite) private sitesRepo: Repository<CompanySite>,
  ) {}
}
