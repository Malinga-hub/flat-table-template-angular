import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},

  {
    path: '',
    component: NavigationComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'databtables',
        loadChildren: () =>
          import('./datatables/datatables.module').then(
            (m) => m.DatatablesModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      { path: 'page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
