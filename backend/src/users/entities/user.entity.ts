import { prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { IsNumber, IsNumberString, IsString } from "class-validator";

export class User extends TimeStamps{
    @prop()
    @IsString()
    name:string;
    
    @prop()
    @IsString()
    age:string
}
export class Patient extends TimeStamps{
    @prop()
    @IsString()
    userID:string;
    
    @prop()
    @IsString()
    address:string
}
