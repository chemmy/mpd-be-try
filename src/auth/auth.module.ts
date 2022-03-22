import { UsersRepository } from '../users/user.repository';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from 'src/users/schemas/user.schema';
// import { EmailVerificationSchema } from './schemas/emailverification.schema';
// import { ForgottenPasswordSchema } from './schemas/forgottenpassword.schema';
// import { ConsentRegistrySchema } from './schemas/consentregistry.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'mpdSecret51',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UsersRepository]),
    // MongooseModule.forFeature([
    //   { name: 'User', schema: UserSchema },
    //   { name: 'EmailVerification', schema: EmailVerificationSchema },
    //   { name: 'ForgottenPassword', schema: ForgottenPasswordSchema },
    //   { name: 'ConsentRegistry', schema: ConsentRegistrySchema },
    // ]),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
