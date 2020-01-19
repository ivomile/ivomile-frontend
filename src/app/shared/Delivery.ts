import {Customer} from "./Customer";
import {Deserializable} from "./utils/Deserializable";
import {Receiver} from "./Receiver";
import {Parcel} from "./Parcel";

export class Delivery implements Deserializable {
    id: number;
    customer: Customer;
    receiver: Receiver;
    packages: Parcel[] = [];

    pickUpDate: any;
    pickUpHourFrom: any;
    pickUpHourTo: any;
    deliveryHourTo: any;
    deliveryHourFrom: any;
    deliveryDate: any;

    paymentCode: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
