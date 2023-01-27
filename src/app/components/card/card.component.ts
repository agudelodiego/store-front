import { Component, Input } from '@angular/core';
import { faCartShopping,faHeart, faDollar, faStar,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img='https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_960_720.png';
  @Input() name='Pn-testing';
  @Input() sumary='Its a really good product if you are stupid'
  @Input() price=100;
  @Input() puid='';
  @Input() score=0;
  dollarIcon = faDollar;
  favoriteIcon = faHeart;
  cartIcon = faCartShopping;
  starIcon = faStar;
  eyeIcon = faEye;
}
