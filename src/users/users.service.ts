import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export interface User {
    uuid: number;
    nombre: string;
    apellido?: string;
    email: string;
}


@Injectable()
export class UsersService {
    users: User[] = [
        {uuid: 0, nombre: "Georgina", email: "geo@mail.net"},
        {uuid: 1, nombre: "Lucas", apellido: "fernandez", email: "lucas@mail.com"},
        {uuid: 2, nombre: "Fabian", email: "fabian@mail.net"}
    ]

    getUsers(): User[] {
        return this.users;
    }

    getUser(uuid: number): User {        
        const foundUser = this.users.find(user => user.uuid === uuid);
        if (!foundUser) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        return foundUser
    }

    createUser(userData: User): User {
        this.users.push(userData);
        return userData;
    }

    updateUser(uuid: number, userdata: User): User {
        const foundUser = this.getUser(uuid);
        if (!foundUser) this.createUser(userdata);
        const edited = {...foundUser, ...userdata};
        this.users = this.users.filter(user => user.uuid !== uuid);
        this.users.push(edited)
        return edited;
    }

    editUser(uuid: number, userdata: User): User {
        const foundUser = this.getUser(uuid);
        if (!foundUser) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        const edited = {...foundUser, ...userdata};
        this.users = this.users.filter(user => user.uuid !== uuid);
        this.users.push(edited)
        return edited;
    }

    deleteUser(uuid: number): boolean {
        const arrFinal = this.users.filter(user => user.uuid !== uuid);
        if (this.users == arrFinal) return false;
        this.users = arrFinal;
        return true
    }
    
}
