"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardValidationService = void 0;
const common_1 = require("@nestjs/common");
const luhn_util_1 = require("../common/utils/luhn.util");
const creditCardType = require("credit-card-type");
let CardValidationService = class CardValidationService {
    validateCard(cardNumber) {
        const isValid = (0, luhn_util_1.validateLuhn)(cardNumber);
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
};
exports.CardValidationService = CardValidationService;
exports.CardValidationService = CardValidationService = __decorate([
    (0, common_1.Injectable)()
], CardValidationService);
//# sourceMappingURL=service.js.map