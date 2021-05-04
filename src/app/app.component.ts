import { Component, OnInit } from '@angular/core';
import {FootballService} from './Services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Footballer App';
  Fooballers:any[];
  
  constructor(private service:FootballService){

  }

ngOnInit(){
  this.service.GetFootballerData().subscribe(  (data)=>{
  this.Fooballers = data.Footballers;
  console.log(this.Fooballers);


  })  ;
}
}
