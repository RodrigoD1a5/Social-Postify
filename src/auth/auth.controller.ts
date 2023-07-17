import { Body, Controller, Get, HttpCode, Post, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './authGuard/auth.guard';
import { AuthSigninDTO } from './dto/auth.signin.dto';
import { AuthSignupDTO } from './dto/auth.signup.dto';
import { UserRequest } from './decoretors/user.decorator';
import { User } from 'src/user/entity/User';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(200)
    @Post('signin')
    async signin(@Body() body: AuthSigninDTO) {
        return this.authService.signin(body);
    }

    @Post('signup')
    async signup(@Body() body: AuthSignupDTO) {
        return this.authService.signup(body);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    async userLogged(@UserRequest() user: User) {
        return user;
    }
}