import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardValidationService } from './service';
import { ValidateCardDto } from './dto/dto';

@ApiTags('Validation')
@Controller('validate')
export class CardValidationController {
    constructor(private readonly cardValidationService: CardValidationService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Validate a credit card number' })
    @ApiResponse({ status: 200, description: 'The validation result with validity and card type.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    validate(@Body() validateCardDto: ValidateCardDto) {
        return this.cardValidationService.validateCard(validateCardDto.cardNumber);
    }
}