import {Deserializable} from "./utils/Deserializable";
import {Dimension} from "./Dimension";

export class Parcel implements Deserializable {
    description:string;
    price:string;
    type:string;
    weight:number;
    dimension:Dimension;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
