import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'senha',
  database: 'holidaysdb',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
