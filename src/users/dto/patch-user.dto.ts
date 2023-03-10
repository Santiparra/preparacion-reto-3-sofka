import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserInterface } from "../interfaces/user.interface";

export class PatchUserDto implements UserInterface {
    @IsOptional()
    @IsNotEmpty({ message: 'Uuid no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    uuid: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    name: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'El apellido no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    lastName?: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'El email no puede estar vacío' })
    @IsEmail()
    @IsString({ message: '$property debe ser del tipo String' })
    email: string;
}