import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientRequest, ServerResponse } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApp(@Req() request: ClientRequest, @Res() response: ServerResponse): ServerResponse {
    return this.appService.getApp(request,response);
  }

}
