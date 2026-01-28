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
exports.ListingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const listings_service_1 = require("./listings.service");
const create_listing_dto_1 = require("./dto/create-listing.dto");
const update_listing_dto_1 = require("./dto/update-listing.dto");
const listing_entity_1 = require("./entities/listing.entity");
let ListingsController = class ListingsController {
    listingsService;
    constructor(listingsService) {
        this.listingsService = listingsService;
    }
    create(createListingDto) {
        return this.listingsService.create(createListingDto);
    }
    findAll() {
        return this.listingsService.findAll();
    }
    findByUser(userId) {
        return this.listingsService.findByUser(userId);
    }
    findOne(id) {
        return this.listingsService.findOne(id);
    }
    update(id, updateListingDto) {
        return this.listingsService.update(id, updateListingDto);
    }
    remove(id) {
        return this.listingsService.remove(id);
    }
};
exports.ListingsController = ListingsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new listing' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Listing created successfully',
        type: listing_entity_1.ListingEntity,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_listing_dto_1.CreateListingDto]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all listings' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all listings',
        type: [listing_entity_1.ListingEntity],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all listings by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'User ID', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User listings found',
        type: [listing_entity_1.ListingEntity],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get listing by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Listing ID', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listing found',
        type: listing_entity_1.ListingEntity,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update listing by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Listing ID', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listing updated successfully',
        type: listing_entity_1.ListingEntity,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_listing_dto_1.UpdateListingDto]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete listing by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Listing ID', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Listing deleted successfully',
        type: listing_entity_1.ListingEntity,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "remove", null);
exports.ListingsController = ListingsController = __decorate([
    (0, swagger_1.ApiTags)('listings'),
    (0, common_1.Controller)('listings'),
    __metadata("design:paramtypes", [listings_service_1.ListingsService])
], ListingsController);
//# sourceMappingURL=listings.controller.js.map