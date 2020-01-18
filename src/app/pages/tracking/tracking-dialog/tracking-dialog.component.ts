import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../tracking.component";

@Component({
    selector: 'tracking-dialog',
    templateUrl: 'tracking-dialog.component.html',
})
export class TrackingDialog {

    constructor(
        public dialogRef: MatDialogRef<TrackingDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.data = data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
