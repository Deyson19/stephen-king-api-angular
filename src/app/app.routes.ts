import { Routes } from '@angular/router';
import { ShortsDetails, ShortsHome, ShortsList } from './Shorts/pages';
import { VillainsDetails, VillainsHome, VillainsList } from './Villains/pages';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./Books/pages/books-home/books-home.component'),
    children: [
      {
        path: '',
        title: 'Listado de Libros',
        loadComponent: () => import('./Books/pages/list/list.component'),
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./Books/pages/details/details.component'),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'shorts',
    component: ShortsHome,
    children: [
      {
        path: '',
        component: ShortsList,
      },
      {
        path: 'details/:id',
        component: ShortsDetails,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'villains',
    component: VillainsHome,
    children: [
      {
        path: '',
        component: VillainsList,
      },
      {
        path: 'details/:id',
        component: VillainsDetails,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
