import { Publications } from "@prisma/client";
import { CreatePublicationDTO } from "../dto/create-publication.dto";

export abstract class PublicationRepository {
    abstract findPublicationByTitle(title: string): Promise<Publications>;
    abstract createPublication(data: CreatePublicationDTO, userId: number): Promise<Publications>;
    abstract getPublications(id: number): Promise<Publications[]>;


}