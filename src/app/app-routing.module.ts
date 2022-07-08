import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './module/register-form/register-form.component';
import { UserListComponent } from './module/user-list/user-list.component';

const routes: Routes = [
  {
  path:'lista',
  component: UserListComponent
},
  {
  component: RegisterFormComponent,
  path:''
},
{
  component: RegisterFormComponent,
  path:':index'
}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
