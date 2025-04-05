import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/app-layout/app-layout.component').then(
        c => c.AppLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then(c => c.HomeComponent),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./features/barber-services/barber-services.component').then(
            c => c.BarberServicesComponent
          ),
      },
      {
        path: 'cita',
        loadComponent: () =>
          import('./features/booking/booking.component').then(
            c => c.BookingComponent
          ),
      },
      {
        path: 'tienda',
        loadComponent: () =>
          import('./features/store/store.component').then(
            c => c.StoreComponent
          ),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./features/contact/contact.component').then(
            c => c.ContactComponent
          ),
      },
    ],
  },
];
