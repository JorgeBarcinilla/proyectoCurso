import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/i18n.model';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.actions';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';
import { ThemeMode } from 'src/app/theme/models/theme.enum';
import { Theme } from 'src/app/theme/models/theme.model';
import { ThemeService } from 'src/app/theme/services/theme.service';

@Component({
  selector: 'app-navbar [openSidenav]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Language = Language;
  ThemeMode = ThemeMode
  currentTheme: Theme
  currentDate = new Date();
  currentLanguage: Language = this.translateService.defaultLang as Language;

  user$ = this.store.select(AUTH_SELECTORS.selectGetUser);

  @Output('toggleSidenavButton') toggleSidenavButtonOutput = new EventEmitter();
  @Input() openSidenav!: boolean

  constructor(private themeService: ThemeService, private translateService:TranslateService, private store:Store) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.translateService.onLangChange.subscribe((language) => {
      console.log(language)
      this.currentLanguage = language.lang as Language
    });
  }

  ngOnInit(): void {
  }

  toggleSidenavButton(){
    this.toggleSidenavButtonOutput.emit();
  }

  changeThemeMode(themeMode: ThemeMode){
    this.themeService.changeThemeMode(themeMode == ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK, themeMode);
  }

  changeLanguage(language: Language){
    this.translateService.use(language)
  }

  logout(){
    this.store.dispatch(AUTH_ACTIONS.Logout.run())
  }
}
