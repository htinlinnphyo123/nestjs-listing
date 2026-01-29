import { Injectable } from '@nestjs/common';
import { Listing } from '@prisma/client';
import { PrismaService } from '@core/prisma/prisma.service';
import { CreateListingDto } from '../dto/create-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';
import {
  IListingsRepository,
  ListingWithUser,
} from './listings.repository.interface';

@Injectable()
export class ListingsRepository implements IListingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(
    data: CreateListingDto,
    includeUser = false,
  ): Promise<ListingWithUser> {
    return this.prisma.listing.create({
      data,
      include: {
        user: includeUser,
      },
    });
  }

  async findAll(includeUser = false): Promise<ListingWithUser[]> {
    return this.prisma.listing.findMany({
      include: {
        user: includeUser,
      },
    });
  }

  async findById(
    id: number,
    includeUser = false,
  ): Promise<ListingWithUser | null> {
    return this.prisma.listing.findUnique({
      where: { id },
      include: {
        user: includeUser,
      },
    });
  }

  async findByUserId(
    userId: number,
    includeUser = false,
  ): Promise<ListingWithUser[]> {
    return this.prisma.listing.findMany({
      where: { userId },
      include: {
        user: includeUser,
      },
    });
  }

  async update(
    id: number,
    data: UpdateListingDto,
    includeUser = false,
  ): Promise<ListingWithUser> {
    return this.prisma.listing.update({
      where: { id },
      data,
      include: {
        user: includeUser,
      },
    });
  }

  async delete(id: number): Promise<Listing> {
    return this.prisma.listing.delete({
      where: { id },
    });
  }
}
