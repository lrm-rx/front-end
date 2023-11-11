import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let result = 'Hello World!';
    for (let i = 0; i < 10; i++) {
      if (i === 6) {
        result = 'Hello Nest!';
      }
    }
    console.log('aaa');
    return result;
  }
}
