import { ApiProperty } from '@nestjs/swagger';

export class ListingEntity {
  @ApiProperty({ description: 'Listing ID', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Listing title',
    example: 'Beautiful 3BR House in Downtown',
  })
  title: string;

  @ApiProperty({
    description: 'Property description',
    example: 'A spacious 3-bedroom house...',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'Property address',
    example: '123 Main Street, New York, NY 10001',
  })
  address: string;

  @ApiProperty({ description: 'Price in USD', example: 450000.0 })
  price: number;

  @ApiProperty({ description: 'Property type', example: 'house' })
  propertyType: string;

  @ApiProperty({ description: 'Listing status', example: 'available' })
  status: string;

  @ApiProperty({
    description: 'Number of bedrooms',
    example: 3,
    nullable: true,
  })
  bedrooms: number | null;

  @ApiProperty({
    description: 'Number of bathrooms',
    example: 2,
    nullable: true,
  })
  bathrooms: number | null;

  @ApiProperty({
    description: 'Property area in sq ft',
    example: 2500.5,
    nullable: true,
  })
  area: number | null;

  @ApiProperty({ description: 'Owner user ID', example: 1 })
  userId: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;

  constructor(partial: Partial<ListingEntity>) {
    Object.assign(this, partial);
  }
}
