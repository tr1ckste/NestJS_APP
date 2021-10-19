import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PlatformService } from './platform/platform.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly platformService: PlatformService) {}

  @Get('/platform')
  getPlatform(): string {
    return this.platformService.getPlatform();
  }
}
