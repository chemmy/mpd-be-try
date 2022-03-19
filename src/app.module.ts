import { Sites } from './auth/sites.entity';
import { UserSites } from './users/user-sites.entity';
import { UserRoles } from './users/user-roles.entity';
import { User } from './users/user.entity';
import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './auth/roles.entity';
import { UsersModule } from './users/users.module';

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
    TypeOrmModule.forFeature([User, UserRoles, Roles, UserSites, Sites]),
    UsersModule,
  ],
})
export class AppModule {}
