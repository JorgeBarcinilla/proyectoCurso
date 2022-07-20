import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'lista',
    loadChildren: () => import('./modules/user-list/user-list.module').then((m) => m.UserListModule)
  },
  {
    path:'form',
    loadChildren: () => import('./modules/register-form/register-form.module').then((m) => m.RegisterFormModule)
  },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
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
