// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: String;
 
  @Column({type: 'varchar', length:200})
  name: string;

  @Column({type: 'varchar', length:100})
  email: string;

  @Column({type: 'varchar', length:100})
  password: string;

  @Column({type: 'varchar', length:10})
  mobile: string;

  @Column({type: 'varchar', length:10})
  gender: string;

  @Column({type: 'timestamptz'})
  date_of_Birth: Date;
}
