import { Injectable, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Post('register')
    register() {
        return 'register';
    }

    @Post('login')
    login() {
        return 'login';
    }
}
