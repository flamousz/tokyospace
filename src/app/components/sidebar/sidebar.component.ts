import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponentModule } from '../icons/icon-component.module';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { Route } from '../../constants/route.enum';

@Component({
   selector: 'app-sidebar',
   standalone: true,
   imports: [IconComponentModule, RouterModule, CommonModule],
   templateUrl: './sidebar.component.html',
   styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
   currentPath: string = 'home';
   currentPath$?: Subscription;
   Route = Route


   constructor(private router: Router) {}

   ngOnInit(): void {
      this.currentPath = this.router.url;
      this.subscribe()
   }

   ngOnDestroy(): void {
      this.unsubscribe()
   }

   private subscribe() {
      this.currentPath$ = this.router.events
         .pipe(filter((e) => e instanceof NavigationEnd))
         .subscribe((ev) => {
            this.currentPath = (ev as NavigationEnd).urlAfterRedirects;
         });
   }

   private unsubscribe() {
      this.currentPath$?.unsubscribe()
   }
}
