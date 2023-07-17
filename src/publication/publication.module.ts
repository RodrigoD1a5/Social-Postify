import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublication.repository';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService, PrismaPublicationRepository]
})
export class PublicationModule { }
