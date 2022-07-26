import { Component } from '@angular/core';

//Component-Datayı yönettiğimiz yer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentcar';
  user:string ='ishak';
}
