import { animation } from '@angular/animations';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Home | Tokyospace',
		loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: '/dashboard'
			},
			{
				path: 'dashboard',
				title: 'Dashboard | Tokyospace',
				loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
				data: {
					animation: 'dudu'
				}
			},
			{
				path: 'drag-drop',
				title: 'Drag n Drop | Tokyospace',
				loadComponent: () => import('./pages/drag-drop/drag-drop.component').then(c => c.DragDropComponent),
				data: {
					animation: 'dada'
				}

			}
		]
	}
];
