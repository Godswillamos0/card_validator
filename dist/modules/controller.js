"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardValidationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("./service");
const dto_1 = require("./dto/dto");
let CardValidationController = class CardValidationController {
    constructor(cardValidationService) {
        this.cardValidationService = cardValidationService;
    }
    validate(validateCardDto) {
        return this.cardValidationService.validateCard(validateCardDto.cardNumber);
    }
};
exports.CardValidationController = CardValidationController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Validate a credit card number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The validation result with validity and card type.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ValidateCardDto]),
    __metadata("design:returntype", void 0)
], CardValidationController.prototype, "validate", null);
exports.CardValidationController = CardValidationController = __decorate([
    (0, swagger_1.ApiTags)('Validation'),
    (0, common_1.Controller)('validate'),
    __metadata("design:paramtypes", [service_1.CardValidationService])
], CardValidationController);
//# sourceMappingURL=controller.js.map