import { Injectable } from '@nestjs/common';
import { x } from '@shared'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + x;
  }
}
