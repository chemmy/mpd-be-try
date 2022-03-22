import { Sites } from './auth/sites.entity';
import { UserSites } from './users/user-sites.entity';
import { UserRoles } from './users/user-roles.entity';
import { User } from './users/user.entity';
import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './auth/roles.entity';
import { UsersModule } from './users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
// import { MongooseModule } from '@nestjs/mongoose';
// import config from './config';

// const userString =
//   config.db.user && config.db.pass
//     ? config.db.user + ':' + config.db.pass + '@'
//     : '';
// const authSource = config.db.authSource
//   ? '?authSource=' + config.db.authSource + '&w=1'
//   : '';

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
    // MongooseModule.forRoot(
    //   'mongodb://' +
    //     userString +
    //     config.db.host +
    //     ':' +
    //     (config.db.port || '27017') +
    //     '/' +
    //     config.db.database +
    //     authSource,
    // ),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
