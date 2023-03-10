import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    ParseIntPipe, 
    Patch, 
    Post, 
    Put,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { TokenGuard } from 'src/auth/guards/custom-token.guard';
import { ImplementNullInterceptor } from 'src/interceptors/transform-apellido.interceptor';
import { PatchUserDto } from '../dto/patch-user.dto';
import { User } from '../dto/User.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @UseInterceptors(ImplementNullInterceptor)
    @Get() 
    getUsers (): User[] {    
        return this.usersService.getUsers();
    }

    @UseInterceptors(ImplementNullInterceptor)
    @Get(":uuid")
    getUser(@Param( "uuid" ) uuid: string): User {
        return this.usersService.getUser(uuid);
    }

    @UseGuards(TokenGuard)
    @UseInterceptors(ImplementNullInterceptor)
    @Post()
    createUser( @Body() userData: User ): User {
        return this.usersService.createUser(userData);        
    }

    @UseGuards(TokenGuard)
    @UseInterceptors(ImplementNullInterceptor)
    @Put(":uuid")
    updateUser(
        @Body() userdata: User,
        @Param("uuid") uuid: string
    ): User {
        return this.usersService.updateUser(uuid, userdata)
    }

    @UseGuards(TokenGuard)
    @UseInterceptors(ImplementNullInterceptor)
    @Patch(":uuid")
    editUser(
        @Body() userdata: PatchUserDto,
        @Param("uuid") uuid: string
    ): User {
        return this.usersService.editUser(uuid, userdata);
    }

    @UseGuards(TokenGuard)
    @Delete(":uuid")
    deleteUser( @Param("uuid") uuid: string ): boolean {
        return this.usersService.deleteUser(uuid);
    }

}
