import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
})
export class AppModule { }
