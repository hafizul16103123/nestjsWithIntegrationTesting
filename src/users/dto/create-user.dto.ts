import { IsNumber, IsNumberString } from 'class-validator';
import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    name:string;
    
    @ApiProperty()
    @IsNumber()
    age:number
}
export class CreatePatientDto {
    @ApiProperty()
    @IsString()
    userID:string;
    
    @ApiProperty()
    @IsString()
    address:string
}

