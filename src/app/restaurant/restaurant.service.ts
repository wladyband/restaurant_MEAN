import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RestaurantService {
  public url: String = 'http://localhost:3000/api/';

  constructor(private http: Http) {
  //  this.url = environment.url;
   }

   restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${this.url}/restaurants`)
    .map(response => response.json())
  }



}



