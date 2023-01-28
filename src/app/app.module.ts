import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './components/nav/nav.component';
import { ShopingcartComponent } from './components/shopingcart/shopingcart.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopingcartComponent,
    CardComponent,
    HomeComponent,
    SearchComponent,
    ButtonComponent,
    FiltersComponent,
    CartItemComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
