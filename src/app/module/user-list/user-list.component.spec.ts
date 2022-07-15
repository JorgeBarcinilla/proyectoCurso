import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { UserListRoutingModule } from './user-list-routing.module';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports:[
        MockModule(CommonModule),
        MockModule(HttpClientModule),
        MockModule(UserListRoutingModule),
        MockModule(TranslateForChildModule),
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
        MockModule(MatTableModule),
        MockModule(MatInputModule),
        MockModule(MatFormFieldModule),
        MockModule(ReactiveFormsModule),
        RouterTestingModule
      ],
      //providers:[MockService(Router),]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });
});
