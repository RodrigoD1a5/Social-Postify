import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
    constructor(private readonly usersRepository: UsersRepository) { }

    async addUser(body: CreateUserDTO) {
        const user = await this.usersRepository.findUserByEmail(body.email);
        if (user) throw new ConflictException('User already exists');

        const hashedPassword = bcrypt.hashSync(body.password, 10);

        const userCreated = await this.usersRepository.createUser({
            ...body,
            password: hashedPassword,
        })

    }
}