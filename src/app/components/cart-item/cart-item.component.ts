import { Component, Input } from '@angular/core';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl:'./cart-item.component.html',
  styleUrls:['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() img = 'https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_960_720.png';
  @Input() name = 'Test';
  @Input() price = 12;
  @Input() unids = 1;
  plusIcon = faPlus;
  lessIcon = faMinus;
  deleteIcon = faTrash;
  total = 13;
}
