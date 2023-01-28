import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopingcart',
  templateUrl:'./shopingcart.component.html',
  styleUrls:['./shopingcart.component.css']
})
export class ShopingcartComponent {
  closeIcon = faCircleXmark;
}
