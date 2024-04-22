import { Component } from '@angular/core';
import { IconComponentModule } from '../icons/icon-component.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponentModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
