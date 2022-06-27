import { Component, OnInit } from '@angular/core';
import { ThemeMode } from 'src/app/theme/theme.enum';
import { Theme } from 'src/app/theme/theme.model';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ThemeMode = ThemeMode
  temaSeleccionado: Theme

  constructor(private themeService: ThemeService) {
    this.temaSeleccionado = this.themeService.getTheme()
  }

  ngOnInit(): void {
  }

  cambiarModoTema(themeMode: ThemeMode){
    this.themeService.cambiarModoTema(themeMode == ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK, themeMode);
  }
}
