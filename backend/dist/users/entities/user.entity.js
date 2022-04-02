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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const class_validator_1 = require("class-validator");
class User extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "age", void 0);
exports.User = User;
class Patient extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Patient.prototype, "userID", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
exports.Patient = Patient;
//# sourceMappingURL=user.entity.js.map