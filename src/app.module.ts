import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformServiceService } from './platform-service/platform-service.service';
import { PlatformService } from './platform/platform.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PlatformServiceService, PlatformService],
})
export class AppModule {}
