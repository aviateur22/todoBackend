"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = joi_1.default.object({
    // Email     
    email: joi_1.default
        .string()
        .pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
        .required()
        .messages({
        'string.empty': 'email mandatory',
        'string.pattern.base': 'incorrect email format',
        'any.required': 'email mandatory'
    })
});
