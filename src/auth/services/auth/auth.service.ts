import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
    validateUser(token: string) {
        if (token === "99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec") {
            return true;
        }
        return false;
    }
}
