export declare class CardValidationService {
    validateCard(cardNumber: string): {
        isValid: boolean;
        cardType: string | null;
        message: string;
    };
}
