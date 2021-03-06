import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/user.module';
import { CompanyModule } from './company/company.module';

import { User } from './users/user.entity';
import { Role } from './auth/role.entity';
import { Company } from './company/entities/company.entity';
import { CompanySite } from './company/entities/company-site.entity';

import { RolesGuard } from './users/roles.guard';
import { SendgridService } from './sendgrid/sendgrid.service';
import { PasswordModule } from './password/password.module';

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
    UsersModule,
    CompanyModule,
    TypeOrmModule.forFeature([User, Role, Company, CompanySite]),
    PasswordModule,
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    SendgridService,
  ],
  exports: [AppService],
})
export class AppModule {}
