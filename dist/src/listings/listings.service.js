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
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ListingsService = class ListingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createListingDto) {
        const user = await this.prisma.user.findUnique({
            where: { id: createListingDto.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${createListingDto.userId} not found`);
        }
        return this.prisma.listing.create({
            data: createListingDto,
            include: {
                user: true,
            },
        });
    }
    async findAll() {
        return this.prisma.listing.findMany({
            include: {
                user: true,
            },
        });
    }
    async findOne(id) {
        const listing = await this.prisma.listing.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
        if (!listing) {
            throw new common_1.NotFoundException(`Listing with ID ${id} not found`);
        }
        return listing;
    }
    async findByUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        return this.prisma.listing.findMany({
            where: { userId },
            include: {
                user: true,
            },
        });
    }
    async update(id, updateListingDto) {
        await this.findOne(id);
        return this.prisma.listing.update({
            where: { id },
            data: updateListingDto,
            include: {
                user: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.listing.delete({
            where: { id },
        });
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListingsService);
//# sourceMappingURL=listings.service.js.map