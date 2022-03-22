import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './users/user.entity';
import { UserRoles } from './users/user-roles.entity';
import { UserSites } from './users/user-sites.entity';
import { Roles } from './auth/roles.entity';
import { Sites } from './auth/sites.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(UserRoles) private userRolesRepo: Repository<UserRoles>,
    @InjectRepository(UserSites) private userSitesRepo: Repository<UserSites>,
    @InjectRepository(Roles) private rolesRepo: Repository<Roles>,
    @InjectRepository(Sites) private sitesRepo: Repository<Sites>,
  ) {}
}
