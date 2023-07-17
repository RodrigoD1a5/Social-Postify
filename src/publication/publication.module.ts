import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { UsersRepository } from 'src/user/repository/user.repository';
import { PublicationController } from './publication.controller';
import { PublicationsService } from './publication.service';
import { PublicationRepository } from './repository/publication.respository';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublication.repository';
import { PrismaUsersRepository } from 'src/user/repository/implementations/prismaUsers.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [PublicationController],
  providers: [PublicationsService,
    AuthService,
    UserService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    }
  ],
  exports: [
    PublicationsService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    }
  ]
})
export class PublicationsModule { }