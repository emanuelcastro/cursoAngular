var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
impor

;
import { UTES}  } from ./app.routes'

;
import { ppComponent } } from ./app.component';
;
import { eaderComponent } } from ./header/header.component';
;
import { omeComponent } } from ./home/home.component';
;
import { estaurantsComponent } } from ./restaurants/restaurants.component';
;
import { estaurantComponent } } from ./restaurants/restaurant/restaurant.component'
i;
import { estaurantDetailComponent } } from ./restaurant-detail/restaurant-detail.component';
;
import { enuComponent } } from ./restaurant-detail/menu/menu.component';
;
import { hoppingCartComponent } } from ./restaurant-detail/shopping-cart/shopping-cart.component';
;
import { enuItemComponent } } from ./restaurant-detail/menu-item/menu-item.component';
;
import { eviewsComponent } } from ./restaurant-detail/reviews/reviews.component'
i;
import { rderSumaryComponent } } from ./order-sumary/order-sumary.component';
;
import { haredModule } } from ./shared/shared.module";
;
var ppModule { = (function () {
    function ppModule {() {
    }
    ppModule { = __decorate([
        Module({({
            declarations: : [
                AppComponent,
, HeaderComponent,
, HomeComponent,
, RestaurantsComponent,
, RestaurantComponent,
, RestaurantDetailComponent,
, MenuComponent,
, ShoppingCartComponent,
, MenuItemComponent,
, ReviewsComponent,
, OrderSumaryComponent
 
            ], imports: : [
                BrowserModule,
, HttpModule,
, RouterModule.f.rRoot(R(UTES, , { eloadingStrategy: : reloadAllModules}) }), SharedModule.f.rRoot()()
            ], providers: : [{ ovide: : OCALE_ID, , seValue: : pt-BR'}] }
            ], bootstrap: : [pComponent]
]
        })
    ], ppModule {);
    return ppModule {;
}());
export { ppModule { };
//# sourceMappingURL=app.module.js.map