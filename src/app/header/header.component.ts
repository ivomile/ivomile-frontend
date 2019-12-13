import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  password: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(SignInDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
      this.email = result.email 
       this.password = result.password// per estrarre le informazioni dal dialog
      
    
    });
  }
}