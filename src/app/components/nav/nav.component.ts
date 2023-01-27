import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent {

  homeIcon = faHouse;
  cartIcon = faCartShopping;
  favoriteIcon = faHeart;
  userIcon = faCircleUser;
  creditIcon = faCreditCard;
}
