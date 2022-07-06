import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { RegisterFormComponent } from './module/register-form/register-form.component';

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
