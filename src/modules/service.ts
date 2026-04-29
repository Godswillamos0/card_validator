import { Injectable } from '@nestjs/common';
import { validateLuhn } from '../common/utils/luhn.util';
import creditCardType = require('credit-card-type');

@Injectable()
export class CardValidationService {
    validateCard(cardNumber: string) {
        const isValid = validateLuhn(cardNumber);
        
        // Get card type using the credit-card-type library
        const cardTypes = creditCardType(cardNumber);
        const cardType = cardTypes.length > 0 ? cardTypes[0].niceType : null;

        if (!isValid) {
            return { 
                isValid: false, 
                cardType: cardType, 
                message: 'Invalid check digit (Luhn algorithm failure)' 
            };
        }

        return {
            isValid: true,
            cardType,
            message: cardType ? 'Valid card number' : 'Valid number but unknown issuer',
        };
    }
}