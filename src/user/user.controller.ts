import { Controller, Post } from '@nestjs/common';
import{ UserService } from './user.service';
import { CreateuserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userservice: UserService
    ){}

 @Post('createUser')
 async createUser(data : CreateuserDto)
{
    return await this.userservice.createuser(data)
}
}