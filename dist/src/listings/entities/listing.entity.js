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
exports.ListingEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ListingEntity {
    id;
    title;
    description;
    address;
    price;
    propertyType;
    status;
    bedrooms;
    bathrooms;
    area;
    userId;
    createdAt;
    updatedAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ListingEntity = ListingEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Listing ID', example: 1 }),
    __metadata("design:type", Number)
], ListingEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Listing title',
        example: 'Beautiful 3BR House in Downtown',
    }),
    __metadata("design:type", String)
], ListingEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Property description',
        example: 'A spacious 3-bedroom house...',
        nullable: true,
    }),
    __metadata("design:type", Object)
], ListingEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Property address',
        example: '123 Main Street, New York, NY 10001',
    }),
    __metadata("design:type", String)
], ListingEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price in USD', example: 450000.0 }),
    __metadata("design:type", Number)
], ListingEntity.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Property type', example: 'house' }),
    __metadata("design:type", String)
], ListingEntity.prototype, "propertyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Listing status', example: 'available' }),
    __metadata("design:type", String)
], ListingEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of bedrooms',
        example: 3,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ListingEntity.prototype, "bedrooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of bathrooms',
        example: 2,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ListingEntity.prototype, "bathrooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Property area in sq ft',
        example: 2500.5,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ListingEntity.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Owner user ID', example: 1 }),
    __metadata("design:type", Number)
], ListingEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], ListingEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Date)
], ListingEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=listing.entity.js.map