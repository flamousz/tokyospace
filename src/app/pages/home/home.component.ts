import { Component } from '@angular/core';
import { IconComponentModule } from '../../components/icons/icon-component.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { slideInAnimation } from '../../animations/global.animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconComponentModule, SidebarComponent, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    slideInAnimation,
  ]
})
export class HomeComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    console.log(this.contexts.getContext('primary')?.route?.snapshot.data?.['animation']);
    
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation']
    // return 'slideInAnimation'
  }
}
