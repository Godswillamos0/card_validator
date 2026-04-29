import { Injectable } from '@nestjs/common';
import { validateLuhn } from '../common/utils/luhn.util';

@Injectable()
export class CardValidationService {
    validateCard(cardNumber: string) {
        const isValid = validateLuhn(cardNumber);

        if (!isValid) {
            return { isValid: false, cardType: null, message: 'Luhn checksum failed' };
        }

        const cardType = this.getCardType(cardNumber);
        return {
            isValid: true,
            cardType,
            message: cardType ? 'Valid card number' : 'Valid number but unknown issuer',
        };
    }

    private getCardType(number: string): string | null {
        if (/^4/.test(number)) return 'Visa';
        if (/^5[1-5]/.test(number) || /^2[2-7]/.test(number)) return 'Mastercard';
        if (/^(506[01]|507[89]|6500)/.test(number)) return 'Verve';
        return null;
    }
}