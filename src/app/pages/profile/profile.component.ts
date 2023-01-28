import { Component } from '@angular/core';
import { faCircleUser, faLock, faEnvelope, faEarthAmerica, faCreditCard, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:['./profile.component.css']
})
export class ProfileComponent {
  userImg = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  nameIcon = faCircleUser;
  emailIcon = faEnvelope;
  passwordIcon = faLock;
  contryIcon = faEarthAmerica;
  cardIcon = faCreditCard;
  locationIcon = faLocationDot;
}
