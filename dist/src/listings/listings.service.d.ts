import { PrismaService } from '../prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
export declare class ListingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createListingDto: CreateListingDto): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    }>;
    findAll(): Promise<({
        user: {
            password: string;
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    }>;
    findByUser(userId: number): Promise<({
        user: {
            password: string;
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    })[]>;
    update(id: number, updateListingDto: UpdateListingDto): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    }>;
    remove(id: number): Promise<{
        description: string | null;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        propertyType: string;
        status: string;
        bedrooms: number | null;
        bathrooms: number | null;
        area: import("@prisma/client-runtime-utils").Decimal | null;
        userId: number;
    }>;
}
