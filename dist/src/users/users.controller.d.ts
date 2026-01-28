import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<({
        listings: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            description: string | null;
            address: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            propertyType: string;
            status: string;
            bedrooms: number | null;
            bathrooms: number | null;
            area: import("@prisma/client-runtime-utils").Decimal | null;
            userId: number;
        }[];
    } & {
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        listings: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            description: string | null;
            address: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            propertyType: string;
            status: string;
            bedrooms: number | null;
            bathrooms: number | null;
            area: import("@prisma/client-runtime-utils").Decimal | null;
            userId: number;
        }[];
    } & {
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
