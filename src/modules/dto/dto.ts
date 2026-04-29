import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class ValidateCardDto {
    @IsString()
    @MinLength(13)
    @MaxLength(19)
    @Matches(/^[0-9]+$/, { message: 'Card number must contain only digits' })
    cardNumber: string;
}