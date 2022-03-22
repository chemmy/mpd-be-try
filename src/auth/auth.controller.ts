import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  Body,
  Controller,
  Post,
  // Req,
  // UseGuards
} from '@nestjs/common';

// import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(authCredentialsDto);
  }

  // test signin with token
  // @Post('/test')
  // @UseGuards(AuthGuard())
  // test(@Req() req) {
  //   console.log(req);
  // }
}
