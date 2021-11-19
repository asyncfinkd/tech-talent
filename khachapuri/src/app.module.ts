import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './modules/admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AdminModule,
    MongooseModule.forRoot(process.env.MONGO),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
