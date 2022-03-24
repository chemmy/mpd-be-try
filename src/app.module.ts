import { Password } from './password/password.entity';
import { Company } from './company/entities/company.entity';
import { CompanySite } from './company/entities/company-site.entity';
import { UserSite } from './user/user-site.entity';
import { UserRole } from './user/user-role.entity';
import { User } from './user/user.entity';
import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './auth/role.entity';
import { UsersModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './user/roles.guard';
import { CompanyModule } from './company/company.module';
import { SendgridService } from './sendgrid/sendgrid.service';
import { ConfigModule } from '@nestjs/config';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [
    DashboardModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mpd',
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
    ConfigModule.forRoot(),
    PasswordModule,
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
