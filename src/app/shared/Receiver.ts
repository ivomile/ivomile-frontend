import {Deserializable} from "./utils/Deserializable";
import {Address} from "./Address";

export class Receiver implements Deserializable {
    id: number;
    address: Address;
    name: string;
    lastname: string;
    email:string;
    phoneNumber:string;
    type: string;
    fiscalcode: any;
    vatNumber: any;
    businessName: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
