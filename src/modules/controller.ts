import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CardValidationService } from './service';
import { ValidateCardDto } from './dto/dto';

@Controller('validate')
export class CardValidationController {
    constructor(private readonly cardValidationService: CardValidationService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    validate(@Body() validateCardDto: ValidateCardDto) {
        return this.cardValidationService.validateCard(validateCardDto.cardNumber);
    }
}