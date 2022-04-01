import { Patient } from './../../entities/user.entity';
import { User } from "src/users/entities/user.entity"

export const userStub = ():User=>{return{
    name:'Nusayeb',
    age:1.5

}}
export const patientStub = ():Patient=>{return{
    userID:'1',
    address:'address'

}}