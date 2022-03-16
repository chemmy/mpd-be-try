import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  password: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  firstname: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  lastname: string;

  @IsNumber()
  @MinLength(9)
  @MaxLength(32)
  contact_number: number;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  user_role_id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  company_id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  status: string;
}
