import { Module, Global } from '@nestjs/common';
import { AppLogger } from './logger';

@Global()
@Module({
  providers: [AppLogger],
  exports: [AppLogger],
})
export class LoggerModule {}
