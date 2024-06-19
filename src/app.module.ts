import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(global.dirname, '.', '/app/assets'),
      serveRoot: '/app/assets',
      serveStaticOptions: { index: false },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(global.dirname, '.', '/app'),
      serveRoot: '/app',
      serveStaticOptions: { index: false },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(global.dirname, '.', '/public'),
      serveRoot: '/',
      serveStaticOptions: { index: false },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
