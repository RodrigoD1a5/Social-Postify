import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from "bcrypt"
import { SigninUserDTO } from './dto/signin-user.dto';

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
    async signin(body: SigninUserDTO) {
        const user = await this.usersRepository.findUserByEmail(body.email);
        if (!user) throw new HttpException('Email or password is incorrect', HttpStatus.UNAUTHORIZED)

        const validPassword = bcrypt.compareSync(body.password, user.password);
        if (!validPassword) throw new HttpException('Email or password is incorrect', HttpStatus.UNAUTHORIZED)
    }
}