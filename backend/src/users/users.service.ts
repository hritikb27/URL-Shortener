import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/models/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username: username });
  }

  createUser(user: User): Observable<User | undefined> {
    const newUser = this.usersRepository.create({
      username: user.username,
      name: user.username,
      password: user.password,
    });
    console.log(user);
    return from(this.usersRepository.save(newUser));
  }
}
