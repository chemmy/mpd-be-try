import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PasswordModule } from './password/password.module';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

import { User } from './user/user.entity';
import { Role } from './auth/role.entity';
import { Company } from './company/entities/company.entity';
import { CompanySite } from './company/entities/company-site.entity';

import { RolesGuard } from './user/roles.guard';
import { SendgridService } from './sendgrid/sendgrid.service';
import { UserRole } from './user/user-role.entity';
import { UserSite } from './user/user-site.entity';
import { Password } from './password/password.entity';

@Module({
  imports: [
    DashboardModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      UserRole,
      Role,
      UserSite,
      CompanySite,
      Password,
      Company,
    ]),
    UsersModule,
    CompanyModule,
    PasswordModule,
    TypeOrmModule.forFeature([User, Role, Company, CompanySite]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    SendgridService,
  ],
})
export class AppModule {}
