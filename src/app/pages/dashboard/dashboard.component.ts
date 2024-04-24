import { Component } from '@angular/core';
import { slideInAnimation } from '../../animations/global.animation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    slideInAnimation
  ]
})
export class DashboardComponent {

}
