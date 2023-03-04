import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PatchUserDto } from '../dto/patch-user.dto';
import { User } from '../dto/User.dto';

@Injectable()
export class UsersService {

    users: User[] = [
        {uuid: "0", name: "Georgina", email: "geo@mail.net"},
        {uuid: "1", name: "Lucas", lastName: "fernandez", email: "lucas@mail.com"},
        {uuid: "2", name: "Fabian", email: "fabian@mail.net"}
    ]

    getUsers(): User[] {
        return this.users;
    }

    getUser(uuid: string): User {        
        const foundUser = this.users.find(user => user.uuid === uuid);
        if (!foundUser) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        return foundUser
    }

    createUser(userData: User): User {
        this.users.push(userData);
        return userData;
    }

    updateUser(uuid: string, userdata: User): User {
        const foundUser = this.getUser(uuid);
        if (!foundUser) this.createUser(userdata);
        const edited = {...foundUser, ...userdata};
        this.users = this.users.filter(user => user.uuid !== uuid);
        this.users.push(edited)
        return edited;
    }

    editUser(uuid: string, userdata: PatchUserDto): User {
        const foundUser = this.getUser(uuid);
        if (!foundUser) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        const edited = {...foundUser, ...userdata};
        this.users = this.users.filter(user => user.uuid !== uuid);
        this.users.push(edited)
        return edited;
    }

    deleteUser(uuid: string): boolean {
        const arrFinal = this.users.filter(user => user.uuid !== uuid);
        if (this.users == arrFinal) return false;
        this.users = arrFinal;
        return true
    }
    
}
