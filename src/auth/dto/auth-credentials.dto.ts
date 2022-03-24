import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsEmail()
  @MinLength(8)
  @MaxLength(32)
  email: string;

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

  @IsString()
  @MinLength(9)
  @MaxLength(32)
  contact_number: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  registration_notes: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  company_id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  status: string;
}
