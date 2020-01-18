import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../tracking.component";


@Component({
    selector: 'app-sign-in-dialog',
    templateUrl: 'credential-dialog.component.html',
    styleUrls: [ 'credential-dialog.component.css' ]
})
export class CredentialDialog implements OnInit {

// per gli errori dell'input della mail
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    matcher: any;
    constructor(
        public dialogRef: MatDialogRef<CredentialDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.data = data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

}
