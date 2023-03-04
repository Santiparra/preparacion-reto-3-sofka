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
import { User, UsersService } from '../users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get() 
    getUsers (): User[] {    
        return this.usersService.getUsers();
    }

    @Get(":uuid")
    getUser(@Param( "uuid", ParseIntPipe ) uuid: number): User {
        return this.usersService.getUser(uuid);
    }

    @Post()
    createUser( @Body() userData: User ): User {
        return this.usersService.createUser(userData);        
    }

    @Put(":uuid")
    updateUser(
        @Body() userdata: User,
        @Param("uuid", ParseIntPipe) uuid: number
    ): User {
        return this.usersService.updateUser(uuid, userdata)
    }

    @Patch(":uuid")
    editUser(
        @Body() userdata: User,
        @Param("uuid", ParseIntPipe) uuid: number
    ): User {
        return this.usersService.editUser(uuid, userdata);
    }

    @Delete(":uuid")
    deleteUser( @Param("uuid", ParseIntPipe) uuid: number ): boolean {
        return this.usersService.deleteUser(uuid);
    }

}
