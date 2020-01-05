import {Address} from "./Address";
import {Deserializable} from "./utils/Deserializable";

export class Customer implements Deserializable{
    address: Address;
    name:string;
    lastname: string;
    email:string;
    phoneNumber:string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
