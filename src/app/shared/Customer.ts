import {Address} from "./Address";
import {Deserializable} from "./utils/Deserializable";

export class Customer implements Deserializable{
    address: Address;
    billingAddress: Address;
    name:string;
    lastname: string;
    email:string;
    phoneNumber:string;
    type:string;
    fiscalcode: any;
    businessName: any;
    vatNumber: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
