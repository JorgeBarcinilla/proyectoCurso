import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeMode } from 'src/app/theme/models/theme.enum';
import { Theme } from 'src/app/theme/models/theme.model';
import { ThemeService } from 'src/app/theme/services/theme.service';

@Component({
  selector: 'app-navbar [openSidenav]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ThemeMode = ThemeMode
  currentTheme: Theme
  currentDate = new Date();

  @Output('toggleSidenavButton') toggleSidenavButtonOutput = new EventEmitter();
  @Input() openSidenav!: boolean

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit(): void {
  }

  toggleSidenavButton(){
    this.toggleSidenavButtonOutput.emit();
  }

  changeThemeMode(themeMode: ThemeMode){
    this.themeService.changeThemeMode(themeMode == ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK, themeMode);
  }
}
