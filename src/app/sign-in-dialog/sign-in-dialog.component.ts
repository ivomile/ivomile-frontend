import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: 'sign-in-dialog.component.html',
  styleUrls: [ 'sign-in-dialog.component.css' ]
})
export class SignInDialogComponent implements OnInit {
// per gli errori dell'input della mail
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

      constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}