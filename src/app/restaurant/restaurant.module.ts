import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantsComponent, RestaurantComponent],
  exports: [RestaurantsComponent]
})
export class RestaurantModule { }
