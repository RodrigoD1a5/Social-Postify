import { Module } from '@nestjs/common';
import { UsersRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaUsersRepository } from './repository/implementations/prismaUsers.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [
    UserService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class UsersModule { }