import { Module } from '@nestjs/common';
import { CardValidationModule } from './modules/module';

@Module({
    imports: [CardValidationModule],
})
export class AppModule { }