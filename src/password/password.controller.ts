import { AppService } from './../app.service';
import { Password } from './password.entity';
import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';
import {
  Body,
  Controller,
  Post,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class PasswordController {
  constructor(
    private passwordService: PasswordService,
    private mailerService: MailerService,
    private userService: UserService,
    private appService: AppService,
  ) {}

  @Post('forgot')
  async forgot(@Body('username') email: string) {
    const token = Math.random().toString(20).substr(2, 12);

    await this.passwordService.create({
      email,
      token,
    });

    const url = `http://localhost:3000/reset/${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Reset Your Password!',
      html: `Click <a href="${url}">Here</a> to reset your password`,
    });

    return {
      message: 'Please check your email!',
    };
  }

  @Post('reset')
  async reset(
    @Body('token') token: string,
    @Body('password') password: string,
    @Body('password_confirm') password_confirm: string,
  ) {
    if (password !== password_confirm) {
      throw new BadRequestException('Password not match');
    }

    const passwordReset: any = await this.passwordService.findOne({ token });

    const user = this.userService.findOne({
      username: passwordReset.username,
    });

    if (!user) {
      throw new NotFoundException('User not Found');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await this.appService.update(user.id, { password: hashedPassword });

    return {
      message: 'success',
    };
  }
}
