import {Deserializable} from "./utils/Deserializable";

export class Service implements Deserializable{

    onehour: any;
    twohour: any;
    deliveryNoteStandard: any;

    twoHourInterval: any;
    fourHourInterval: any;
    deliveryNoteUrgent: any;

    standardDeliveryTime: any;
    deliveryNoteInterval: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
