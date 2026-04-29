import { Module } from '@nestjs/common';
import { CardValidationController } from './controller';
import { CardValidationService } from './service';

@Module({
    controllers: [CardValidationController],
    providers: [CardValidationService],
})
export class CardValidationModule { }