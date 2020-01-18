import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData, TimeForDelivery, TimeSlotWidth} from "../tracking.component";

@Component({
    selector: 'dialog-timeslot-selection',
    templateUrl: 'timeslot-dialog.component.html',
})
export class TrackingTimeSlot {

    timeSlots: TimeSlotWidth[] = [
        {value: 1, viewValue: '2 ore'},
        {value: 2, viewValue: '3 ore'},
        {value: 3, viewValue: 'Mezza giornata'},
        {value: 4, viewValue: 'Tutto il giorno'}
    ];
    private timeForDeliveryDefault: TimeForDelivery[];

    timeForDeliverys: TimeForDelivery[] = this.timeForDeliveryDefault;

    constructor(
        public dialogRef: MatDialogRef<TrackingTimeSlot>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
