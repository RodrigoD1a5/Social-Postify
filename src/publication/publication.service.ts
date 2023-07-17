import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.respository';

@Injectable()
export class PublicationService {
    constructor(private readonly publicationsRepository: PublicationRepository) { }

    async createPublication(body: CreatePublicationDTO, userId: number) {
        const publication = await this.publicationsRepository.findPublicationByTitle(body.title);
        if (publication && publication.userId === userId) throw new HttpException('This publication was already created', HttpStatus.CONFLICT);

        return this.publicationsRepository.createPublication(body, userId)
    }
}
