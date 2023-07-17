import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { Users } from '@prisma/client';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decoretors/user.decorator';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationsService: PublicationService) { }

  @UseGuards(AuthGuard)
  @Post()
  createPublication(@Body() body: CreatePublicationDTO, @UserRequest() user: Users) {
    const userId = user.id;
    return this.publicationsService.createPublication(body, userId);
  }
}
