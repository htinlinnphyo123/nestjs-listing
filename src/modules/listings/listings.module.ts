import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { PrismaModule } from '@core/prisma/prisma.module';
import { LISTINGS_REPOSITORY } from './repositories/listings.repository.interface';
import { ListingsRepository } from './repositories/listings.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ListingsController],
  providers: [
    ListingsService,
    {
      provide: LISTINGS_REPOSITORY,
      useClass: ListingsRepository,
    },
  ],
})
export class ListingsModule {}
