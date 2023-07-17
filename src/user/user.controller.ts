import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { SigninUserDTO } from './dto/signin-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  addUser(@Body() body: CreateUserDTO) {
    return this.userService.addUser(body)
  }

  // @HttpCode(200)
  // @Post('signin')
  // signinUser(@Body() body: SigninUserDTO) {
  //   return this.userService.signin(body);
  // }
}
