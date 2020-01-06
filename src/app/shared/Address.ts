import {Deserializable} from "./utils/Deserializable";

export class Address implements Deserializable{
    road:string;
    number:string;
    normalized:boolean;
    province: string;
    city:string;
    country:string;
    zipcode:string;
    cap: any;
    street: any;
    civicNumber: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
