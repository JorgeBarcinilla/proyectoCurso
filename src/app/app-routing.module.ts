import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './guards/auth2/auth2.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '', canActivateChild:[Auth2Guard], loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule) },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
