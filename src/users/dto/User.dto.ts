import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserInterface } from "../interfaces/user.interface";

export class User implements UserInterface {
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    uuid: string;

    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    name: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    lastName?: string;

    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser String' })
    @IsEmail()
    email: string;
}