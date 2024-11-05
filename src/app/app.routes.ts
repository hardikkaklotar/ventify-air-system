import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        (m) => m.HomeComponent
      )
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'product-details',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
