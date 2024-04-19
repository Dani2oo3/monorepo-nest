import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'db_user',
    password: 'root',
    database: 'db_crud',
    autoLoadEntities: true,
    synchronize: false,
  }),
    UsersModule,
    AuthModule],
})
export class AppModule {}
