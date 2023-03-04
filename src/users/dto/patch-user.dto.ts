import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserInterface } from "../interfaces/user.interface";

export class PatchUserDto implements UserInterface {
    @IsOptional()
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    uuid: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    name: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsString({ message: '$property debe ser del tipo String' })
    lastName?: string;
    
    @IsOptional()
    @IsNotEmpty({ message: 'Este valor no puede estar vacío' })
    @IsEmail()
    @IsString({ message: '$property debe ser del tipo String' })
    email: string;
}