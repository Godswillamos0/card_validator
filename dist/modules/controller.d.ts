import { CardValidationService } from './service';
import { ValidateCardDto } from './dto/dto';
export declare class CardValidationController {
    private readonly cardValidationService;
    constructor(cardValidationService: CardValidationService);
    validate(validateCardDto: ValidateCardDto): {
        isValid: boolean;
        cardType: string | null;
        message: string;
    };
}
