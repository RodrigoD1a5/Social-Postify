import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/User';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  addUser(@Body() body: CreateUserDTO) {
    return this.userService.addUser(body)
  }
}
