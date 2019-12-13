import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component' 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  password: string;
  email: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
      this.email = result.email 
       this.password = result.password// per estrarre le informazioni dal dialog
      
    
    });
  }
}