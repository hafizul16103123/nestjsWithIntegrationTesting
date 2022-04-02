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
exports.UsersService = void 0;
const user_entity_1 = require("./../entities/user.entity");
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let UsersService = class UsersService {
    constructor(userModel, patientModel) {
        this.userModel = userModel;
        this.patientModel = patientModel;
    }
    async create(createUserDto) {
        const doc = await this.userModel.create(createUserDto);
        console.log({ doc });
        if (!doc)
            throw new common_1.HttpException('User did not created', 400);
        const userID = doc._id;
        if (userID) {
            const createPatientDto = {
                userID,
                address: 'address'
            };
            const patientDoc = await this.patientModel.create(createPatientDto);
            if (!patientDoc)
                throw new common_1.HttpException('Patient did not created', 400);
        }
        return doc;
    }
    async findAll() {
        const doc = await this.userModel.find();
        if (!doc)
            throw new common_1.HttpException('No User Found', 400);
        return doc;
    }
    async findOne(id) {
        const doc = await this.userModel.findOne({ _id: id });
        if (!doc)
            throw new common_1.HttpException('Invalid user id provided', 400);
        return doc;
    }
    async update(id, updateUserDto) {
        const doc = await this.userModel.findOne({ _id: id });
        if (!doc)
            throw new common_1.HttpException('Invalid user id provided', 400);
        for (const [key, val] of Object.entries(updateUserDto)) {
            doc[key] = updateUserDto[key];
        }
        return doc.save();
    }
    async remove(id) {
        const doc = await this.userModel.findOne({ _id: id });
        if (!doc)
            throw new common_1.HttpException('Invalid user id provided', 400);
        return doc.remove();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_entity_1.User)),
    __param(1, (0, nestjs_typegoose_1.InjectModel)(user_entity_1.Patient)),
    __metadata("design:paramtypes", [Object, Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map