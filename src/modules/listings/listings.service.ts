import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  async create(createListingDto: CreateListingDto) {
    // Verify that user exists
    const user = await this.prisma.user.findUnique({
      where: { id: createListingDto.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createListingDto.userId} not found`,
      );
    }

    return this.prisma.listing.create({
      data: createListingDto,
      include: {
        user: true,
      },
    });
  }

  async findAll() {
    return this.prisma.listing.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }

    return listing;
  }

  async findByUser(userId: number) {
    // Verify that user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.listing.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
  }

  async update(id: number, updateListingDto: UpdateListingDto) {
    // Check if listing exists
    await this.findOne(id);

    return this.prisma.listing.update({
      where: { id },
      data: updateListingDto,
      include: {
        user: true,
      },
    });
  }

  async remove(id: number) {
    // Check if listing exists
    await this.findOne(id);

    return this.prisma.listing.delete({
      where: { id },
    });
  }
}
