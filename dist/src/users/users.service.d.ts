import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        password: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<({
        listings: {
            description: string | null;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            address: string;
            price: Prisma.Decimal;
            propertyType: string;
            status: string;
            bedrooms: number | null;
            bathrooms: number | null;
            area: Prisma.Decimal | null;
            userId: number;
        }[];
    } & {
        password: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        listings: {
            description: string | null;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            address: string;
            price: Prisma.Decimal;
            propertyType: string;
            status: string;
            bedrooms: number | null;
            bathrooms: number | null;
            area: Prisma.Decimal | null;
            userId: number;
        }[];
    } & {
        password: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        password: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        password: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
