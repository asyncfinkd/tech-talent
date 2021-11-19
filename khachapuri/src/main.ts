import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true
    }
  );

  process.env.PWD = process.cwd();
  app.use('/public/images', express.static(process.env.PWD + '/public/images'));

  app.use(compression());
  // app.use(helmet());

  await app.listen(process.env.PORT, () => {
    console.log(`server is already started ${process.env.PORT}`);
  });
}

bootstrap();
