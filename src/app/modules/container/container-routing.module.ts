import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerComponent,
    loadChildren: () => import('./views/user-list/user-list.module').then((m) => m.UserListModule)
  },
  {
    path:'form',
    component: ContainerComponent,
    loadChildren: () => import('./views/register-form/register-form.module').then((m) => m.RegisterFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
