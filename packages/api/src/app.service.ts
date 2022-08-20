import { Injectable } from '@nestjs/common';

import { Happy } from '@lms/common'

@Injectable()
export class AppService {
  getHello(): string {
    Happy();
    return 'Hello World!';
  }
}
