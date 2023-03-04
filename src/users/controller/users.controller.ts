import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    ParseIntPipe, 
    Patch, 
    Post, 
    Put
} from '@nestjs/common';
import { PatchUserDto } from '../dto/patch-user.dto';
import { User } from '../dto/User.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get() 
    getUsers (): User[] {    
        return this.usersService.getUsers();
    }

    @Get(":uuid")
    getUser(@Param( "uuid" ) uuid: string): User {
        return this.usersService.getUser(uuid);
    }

    @Post()
    createUser( @Body() userData: User ): User {
        return this.usersService.createUser(userData);        
    }

    @Put(":uuid")
    updateUser(
        @Body() userdata: User,
        @Param("uuid") uuid: string
    ): User {
        return this.usersService.updateUser(uuid, userdata)
    }

    @Patch(":uuid")
    editUser(
        @Body() userdata: PatchUserDto,
        @Param("uuid") uuid: string
    ): User {
        return this.usersService.editUser(uuid, userdata);
    }

    @Delete(":uuid")
    deleteUser( @Param("uuid") uuid: string ): boolean {
        return this.usersService.deleteUser(uuid);
    }

}
