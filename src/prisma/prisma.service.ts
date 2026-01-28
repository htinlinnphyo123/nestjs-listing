import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(configService: ConfigService) {
    const connectionString = configService.get<string>('DATABASE_URL') || '';
    const connectionUrl = new URL(connectionString);

    const adapter = new PrismaMariaDb({
      host: connectionUrl.hostname,
      port: parseInt(connectionUrl.port) || 3306,
      user: connectionUrl.username || 'root',
      password: connectionUrl.password || '',
      database: connectionUrl.pathname.slice(1),
    });

    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
