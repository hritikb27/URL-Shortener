import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ormConfig } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { UrlTextService } from './url-text/url-text.service';
import { UrlTextModule } from './url-text/url-text.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(ormConfig),
    UrlTextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
