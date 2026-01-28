import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDecimal,
  IsInt,
  Min,
} from 'class-validator';

export class CreateListingDto {
  @ApiProperty({
    description: 'Listing title',
    example: 'Beautiful 3BR House in Downtown',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Detailed property description',
    example: 'A spacious 3-bedroom house with modern amenities...',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Property address',
    example: '123 Main Street, New York, NY 10001',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Price in USD',
    example: 450000.0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Type of property',
    example: 'house',
    enum: ['apartment', 'house', 'condo', 'commercial', 'land'],
  })
  @IsString()
  @IsNotEmpty()
  propertyType: string;

  @ApiProperty({
    description: 'Listing status',
    example: 'available',
    enum: ['available', 'sold', 'rented', 'pending'],
    default: 'available',
    required: false,
  })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({
    description: 'Number of bedrooms',
    example: 3,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(0)
  bedrooms?: number;

  @ApiProperty({
    description: 'Number of bathrooms',
    example: 2,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(0)
  bathrooms?: number;

  @ApiProperty({
    description: 'Property area in square feet',
    example: 2500.5,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  area?: number;

  @ApiProperty({
    description: 'User ID of the property owner',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
