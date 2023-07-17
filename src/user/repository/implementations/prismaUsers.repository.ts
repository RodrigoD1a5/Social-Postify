import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../user.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
    constructor(private readonly prisma: PrismaService) { }

    async addUser(data: CreateUserDTO) {
        return await this.prisma.users.create({ data: data });
    }

    async findAllUsers() {
        return await this.prisma.users.findMany({});
    }

    async findUserByEmail(email: string) {
        return await this.prisma.users.findUnique({ where: { email } });
    }

    async findUserById(id: number) {
        return await this.prisma.users.findFirst({ where: { id } });
    }
}