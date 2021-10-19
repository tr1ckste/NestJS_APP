import { Injectable } from '@nestjs/common';

@Injectable()
export class PlatformService {
  getPlatform(): string {
    return process.platform;
  }
}
