import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantService {


  rests: Restaurant[] = [
    {
        id: "batata_gratinada",
        name: "batata gratinada",
        category: "almoço",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: "assets/img/restaurants/breadbakery.png"

    },
    {
      id: "batata_gratinada",
      name: "batata gratinada",
      category: "almoço",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"

  }
]

  constructor() { }


  restaurants(): Restaurant[] {
    return this.rests
  }


}



