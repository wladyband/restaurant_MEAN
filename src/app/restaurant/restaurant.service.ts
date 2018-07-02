import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../core/app.error-handler';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class RestaurantService {
  public url: String;

  constructor(private http: Http) {
    this.url = environment.url;
   }

   restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${this.url}/restaurants`)
    .map(response => response.json().restaurants)
    .catch(ErrorHandler.handlerError)
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${this.url}/restaurants/${name}`)
    .map(response =>  response.json().restaurants)
    .catch(ErrorHandler.handlerError)
  }


}



