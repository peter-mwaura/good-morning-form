// src/submission/dto/create-submission.dto.ts
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateSubmissionDto {
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('KE') // or 'IN' for India
  phoneNumber: string;

  @IsEmail()
  email: string;
}
