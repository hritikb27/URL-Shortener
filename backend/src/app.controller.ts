import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Next,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGaurd } from './auth/authenticated.gaurd';
import { LocalAuthGaurd } from './auth/local-auth.gaurd';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(AuthenticatedGaurd)
  @Get('isAuthenticated')
  getHello(@Response() res): boolean {
    const bool = AuthenticatedGaurd;
    return res.send(bool);
  }

  @Get('logout')
  logout(@Request() req, @Response() res, @Next() next): any {
    console.log('LOGOUT TRIGGERED')
    return req.logout(function (err) {
      if (err) {
        return next(err);
      }
      req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
      });
    });
  }
}
