import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http:HttpClient) { }

  GetFootballerData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/4e216a6e-ad00-11eb-8e44-f5cfe87d7d46');
  }
}
