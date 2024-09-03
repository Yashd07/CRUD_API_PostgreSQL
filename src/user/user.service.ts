import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { CreateuserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/db/entities/user-entity';

@Injectable()
export class UserService {
    private manager: EntityManager  

    constructor(
        @Inject('DataSource')
        private datasource: DataSource
    ) {
        this.manager = this.datasource.manager;
    }

    // Create user
    async createuser(data: CreateuserDto) {
        try {
            const user = await this.manager.getRepository(UserEntity).findOneBy({ email: data.email });
            if (user) {
                throw new BadRequestException('User already exists, go to login');
            }

            const createUser = this.manager.create(UserEntity, {
                email: data.email,  // Corrected typo from "emall" to "email"
                name: data.name,
                mobile: data.mobile,
                gender: data.gender,
                date_of_birth: data.date_of_birth
            });

            await this.manager.save(UserEntity, createUser);

            return { message: 'User created successfully', createUser };
        } catch (error) {
            // Check if the error is already handled by another exception
            if (error instanceof BadRequestException) {
                throw error;
            }
            // Otherwise, throw a generic error
            throw new NotFoundException(`${error.message}`);
        }
    }

    // Additional methods to be implemented:
    // updateUser
    // deleteUser
    // getAllUsers
    // getUserById
}
