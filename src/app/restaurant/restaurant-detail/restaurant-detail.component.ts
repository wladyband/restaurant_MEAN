import { RestaurantService } from './../restaurant.service';
import { Restaurant } from './../restaurant.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {


 restaurant: Restaurant

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant =>  this.restaurant = restaurant)
}


}
