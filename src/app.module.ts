import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';


@Module({
  imports: [DbModule, ConfigModule.forRoot({isGlobal:true}), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
