import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateCardDto {
    @ApiProperty({
        description: 'The credit card number to validate',
        example: '4111111111111',
        minLength: 13,
        maxLength: 19
    })
    @IsString()
    @MinLength(13)
    @MaxLength(19)
    @Matches(/^[0-9]+$/, { message: 'Card number must contain only digits' })
    cardNumber: string;
}