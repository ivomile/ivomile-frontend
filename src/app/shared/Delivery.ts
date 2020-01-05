import {Customer} from "./Customer";
import {Deserializable} from "./utils/Deserializable";
import {Receiver} from "./Receiver";
import {Parcel} from "./Parcel";

export class Delivery implements Deserializable {
    id: number;
    customer: Customer;
    receiver: Receiver;
    packages: Parcel[] = [];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
