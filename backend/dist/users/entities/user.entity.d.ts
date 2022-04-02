import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
export declare class User extends TimeStamps {
    name: string;
    age: string;
}
export declare class Patient extends TimeStamps {
    userID: string;
    address: string;
}
