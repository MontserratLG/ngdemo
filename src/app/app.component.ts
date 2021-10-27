import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'my-app';
  //jamás hacer un any en producción, es mejor tipar

  data: any[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit () {
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe((data: any)=> {
      this.data = data;
    })
  }
}
