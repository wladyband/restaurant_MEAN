import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantService: RestaurantService){}

  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants()
  }

}