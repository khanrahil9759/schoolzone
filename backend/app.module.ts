import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { config } from './config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
