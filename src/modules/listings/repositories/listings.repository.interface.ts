import { Listing } from '@prisma/client';
import { CreateListingDto } from '../dto/create-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';

export const LISTINGS_REPOSITORY = Symbol('LISTINGS_REPOSITORY');

export type ListingWithUser = Listing & {
  user?: any;
};

export interface IListingsRepository {
  /**
   * Create a new listing
   * @param data Listing creation data
   * @returns Created listing
   */
  create(
    data: CreateListingDto,
    includeUser?: boolean,
  ): Promise<ListingWithUser>;

  /**
   * Find all listings
   * @param includeUser Whether to include listing's user
   * @returns Array of listings
   */
  findAll(includeUser?: boolean): Promise<ListingWithUser[]>;

  /**
   * Find listing by ID
   * @param id Listing ID
   * @param includeUser Whether to include listing's user
   * @returns Listing or null if not found
   */
  findById(id: number, includeUser?: boolean): Promise<ListingWithUser | null>;

  /**
   * Find listings by user ID
   * @param userId User ID
   * @param includeUser Whether to include listing's user
   * @returns Array of listings
   */
  findByUserId(
    userId: number,
    includeUser?: boolean,
  ): Promise<ListingWithUser[]>;

  /**
   * Update listing
   * @param id Listing ID
   * @param data Update data
   * @param includeUser Whether to include listing's user
   * @returns Updated listing
   */
  update(
    id: number,
    data: UpdateListingDto,
    includeUser?: boolean,
  ): Promise<ListingWithUser>;

  /**
   * Delete listing
   * @param id Listing ID
   * @returns Deleted listing
   */
  delete(id: number): Promise<Listing>;
}
