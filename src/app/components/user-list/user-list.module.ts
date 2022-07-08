import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    TranslateForChildModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class UserListModule { }
