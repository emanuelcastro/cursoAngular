import {Injectable} from "@angular/core"
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurant} from "./restaurant/restaurant.model"

import {MEAT_API} from "../app.api"
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient){}

  restaurants(search?: string): Observable<Restaurant[]>{
      return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

}
