import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
export class CreateuserDto{
@IsString()
@IsNotEmpty()
name: string;

@IsEmail()
@IsNotEmpty()
email: string;

@IsString()
@IsNotEmpty()
password: string;

@IsString()
@IsNotEmpty()
mobile: string;

@IsString()
@IsNotEmpty()
gender: string;

@Transform(({ value }) => value && new Date(value) )
date_of_birth: Date
}