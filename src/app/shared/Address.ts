import {Deserializable} from "./utils/Deserializable";

export class Address implements Deserializable{
    road:string;
    number:string;
    normalized:boolean;
    province: string;
    city:string;
    country:string;
    zipcode:string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
