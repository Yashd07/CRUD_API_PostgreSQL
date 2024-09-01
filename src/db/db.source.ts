import { Inject } from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import { DataSource } from 'typeorm'
import { UserEntity } from './entities/user-entity'

  export const DBConnection = [
    {
      provide: 'DataSource',
      useFactory: async (configService: ConfigService) => {
        const datasource = new DataSource({
          type: 'postgres',
          host: configService.get<string>('DB_HOST'), 
          port: configService.get<number>('DB_PORT'),  
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          synchronize: true,  // Set to false in production
          entities: [
            UserEntity
          ],
          logging: true,
        });
        return await datasource.initialize();
      },
      inject: [ConfigService]  // Correct syntax for inject
    }
  ];