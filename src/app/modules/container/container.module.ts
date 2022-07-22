import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';


@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TranslateForChildModule
  ]
})
export class ContainerModule { }
