import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ormConfigAsync } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { UrlTextModule } from './url-text/url-text.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRootAsync(ormConfigAsync),
    UrlTextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
