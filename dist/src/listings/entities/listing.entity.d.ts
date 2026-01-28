export declare class ListingEntity {
    id: number;
    title: string;
    description: string | null;
    address: string;
    price: number;
    propertyType: string;
    status: string;
    bedrooms: number | null;
    bathrooms: number | null;
    area: number | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<ListingEntity>);
}
