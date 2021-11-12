/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('test1')
  testFunc(): any {
    return 'hello1';
  }
}
