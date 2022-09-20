import { Module } from '@nestjs/common';
import { UrlsEntity } from 'src/models/urls.entity';
import { UrlTextController } from '../controllers/url-text.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlTextService } from './url-text.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlsEntity])],
  controllers: [UrlTextController],
  providers: [UrlTextService],
  exports: [UrlTextService],
})
export class UrlTextModule {}
