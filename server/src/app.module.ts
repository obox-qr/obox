import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { LoggerModule } from '@/common/utils/logger/logger.module';
import { UsersModule } from './users/users.module';

import { HealthModule } from './health/health.module';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '../../', '.env'),
      load: [config],
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        url: configService.get<string>('DB_CONNECTION_STRING'),
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    HealthModule,
    LoggerModule,
    UsersModule,
  ],
})
export class AppModule {}
