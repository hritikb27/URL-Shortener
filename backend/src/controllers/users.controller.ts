import { Controller, Post, Get, Query, Response } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';
import { Observable } from 'rxjs';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('addUser')
  addUser(
    @Query('name') name: string,
    @Query('username') username: string,
    @Query('password') password: string,
  ): Observable<User> {
    console.log('Add user');
    return this.userService.createUser({ name, username, password });
  }

  @Get('demo')
  getHello(@Response() res): string {
    return res.json('Hello User!');
  }
}
