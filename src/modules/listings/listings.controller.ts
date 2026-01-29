import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { ListingEntity } from './entities/listing.entity';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new listing' })
  @ApiResponse({
    status: 201,
    description: 'Listing created successfully',
    type: ListingEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'User not found' })
  create(@Body() createListingDto: CreateListingDto) {
    return this.listingsService.create(createListingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all listings' })
  @ApiResponse({
    status: 200,
    description: 'List of all listings',
    type: [ListingEntity],
  })
  findAll() {
    return this.listingsService.findAll();
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all listings by user ID' })
  @ApiParam({ name: 'userId', description: 'User ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'User listings found',
    type: [ListingEntity],
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.listingsService.findByUser(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get listing by ID' })
  @ApiParam({ name: 'id', description: 'Listing ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Listing found',
    type: ListingEntity,
  })
  @ApiResponse({ status: 404, description: 'Listing not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listingsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update listing by ID' })
  @ApiParam({ name: 'id', description: 'Listing ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Listing updated successfully',
    type: ListingEntity,
  })
  @ApiResponse({ status: 404, description: 'Listing not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListingDto: UpdateListingDto,
  ) {
    return this.listingsService.update(id, updateListingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete listing by ID' })
  @ApiParam({ name: 'id', description: 'Listing ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Listing deleted successfully',
    type: ListingEntity,
  })
  @ApiResponse({ status: 404, description: 'Listing not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.listingsService.remove(id);
  }
}
