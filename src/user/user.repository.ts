import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) { }
    async findUserByEmail(email: string) {
        return await this.prisma.users.findUnique({ where: { email } })
    }
    async createUser(data: CreateUserDTO) {
        return await this.prisma.users.create({ data: data });
    }

}