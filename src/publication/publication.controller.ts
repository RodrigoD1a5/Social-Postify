import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { Users } from '@prisma/client';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decoretors/user.decorator';
import { PublicationsService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationsService: PublicationsService) { }

  @UseGuards(AuthGuard)
  @Post()
  createPublication(@Body() body: CreatePublicationDTO, @UserRequest() user: Users) {
    const userId = user.id;
    return this.publicationsService.createPublication(body, userId);
  }

  @UseGuards(AuthGuard)
  @Get()
  getUserPublications(@UserRequest() user: Users) {
    const userId = user.id;
    return this.publicationsService.getAllPublications(userId);
  }

}
