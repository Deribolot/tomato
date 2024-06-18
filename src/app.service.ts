import { Injectable } from '@nestjs/common';
import { createHtml } from './getSSRApp';
import { ClientRequest, ServerResponse } from 'http';

@Injectable()
export class AppService {
  getApp(request: ClientRequest, response: ServerResponse): ServerResponse {
    createHtml(request, response);
    return response
  }
}
