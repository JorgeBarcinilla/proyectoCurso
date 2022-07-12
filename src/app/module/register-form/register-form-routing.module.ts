import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from 'src/app/guards/auth2/auth2.guard';
import { RegisterFormComponent } from './register-form.component';

const routes: Routes = [
  {
    path:'',
    canActivateChild:[Auth2Guard],
    children:[
      {
        path:'',
        component: RegisterFormComponent,
      },
      {
        path:'componente-a',
        loadChildren: () => import('./pages/componente-a/componente-a.module').then((m) => m.ComponenteAModule)
       }
    ]
  },
  {
    path:':index',
    component: RegisterFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterFormRoutingModule { }
