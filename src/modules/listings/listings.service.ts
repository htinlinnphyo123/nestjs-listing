import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import type { IListingsRepository } from './repositories/listings.repository.interface';
import { LISTINGS_REPOSITORY } from './repositories/listings.repository.interface';

@Injectable()
export class ListingsService {
  constructor(
    @Inject(LISTINGS_REPOSITORY)
    private readonly listingsRepository: IListingsRepository,
  ) {}

  async create(createListingDto: CreateListingDto) {
    // Foreign key constraint will handle user existence validation
    return this.listingsRepository.create(createListingDto, true);
  }

  async findAll() {
    return this.listingsRepository.findAll(true);
  }

  async findOne(id: number) {
    const listing = await this.listingsRepository.findById(id, true);

    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }

    return listing;
  }

  async findByUser(userId: number) {
    // Simply return listings for the user ID
    // If user doesn't exist, empty array will be returned
    return this.listingsRepository.findByUserId(userId, true);
  }

  async update(id: number, updateListingDto: UpdateListingDto) {
    // Check if listing exists
    await this.findOne(id);

    return this.listingsRepository.update(id, updateListingDto, true);
  }

  async remove(id: number) {
    // Check if listing exists
    await this.findOne(id);

    return this.listingsRepository.delete(id);
  }
}
