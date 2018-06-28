import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../restaurant/restaurant.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [RestaurantService]
})
export class CoreModule { }
