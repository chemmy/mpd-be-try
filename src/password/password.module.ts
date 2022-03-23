import { AppModule } from './../app.module';
import { Password } from './password.entity';
import { forwardRef, Module } from '@nestjs/common';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Password]),
    MailerModule.forRoot({
      transport: {
        host: '0.0.0.0',
        port: 1025,
      },
      defaults: {
        from: 'admin@stationfive.com',
      },
    }),
    forwardRef(() => AppModule),
  ],
  controllers: [PasswordController],
  providers: [PasswordService],
})
export class PasswordModule {}
