import {Customer} from "./Customer";
import {Deserializable} from "./utils/Deserializable";
import {Receiver} from "./Receiver";
import {Parcel} from "./Parcel";

export class Dimension implements Deserializable {
    height: number;
    width: number;
    depth: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
