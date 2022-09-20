import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from '../controllers/users.controller';
import { UsersEntity } from 'src/models/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
