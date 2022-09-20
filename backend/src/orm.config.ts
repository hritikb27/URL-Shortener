import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'hritik',
  port: 5432,
  host: '127.0.0.1',
  database: 'basicauth_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
