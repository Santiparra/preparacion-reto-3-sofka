import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserInterface } from "../interfaces/user.interface";

export class User implements UserInterface {
    @IsNotEmpty({ message: 'Uuid no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    uuid: string;

    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    name: string;

    @IsOptional()
    @IsNotEmpty({ message: 'El apellido no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    lastName?: string;

    @IsNotEmpty({ message: 'El email no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    @IsEmail()
    email: string;
}