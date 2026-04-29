import { Module } from '@nestjs/common';
import { CardValidationModule } from './modules/module';
import { AppController } from './app.controller';

@Module({
  imports: [CardValidationModule],
  controllers: [AppController],
})
export class AppModule {}
