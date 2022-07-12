import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'lista',
    loadChildren: () => import('./module/user-list/user-list.module').then((m) => m.UserListModule)
  },
  {
    path:'form',
    loadChildren: () => import('./module/register-form/register-form.module').then((m) => m.RegisterFormModule)
  },
  {
    path:'**',
    redirectTo: 'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
