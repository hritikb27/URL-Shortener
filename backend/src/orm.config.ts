/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASS'),
      port: configService.get('DB_PORT'),
      host: configService.get('DB_HOST'),
      database: configService.get('DB_NAME'),
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    };
  }
}

export const ormConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
};
