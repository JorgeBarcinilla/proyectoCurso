import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { TranslateForChildModule } from 'src/app/shared/translate-for-child.module';
import { RegisterFormRoutingModule } from './register-form-routing.module';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports:[
        MockModule(CommonModule),
        MockModule(HttpClientModule),
        MockModule(RegisterFormRoutingModule),
        MockModule(ReactiveFormsModule),
        MockModule(MatButtonModule),
        MockModule(MatFormFieldModule),
        MockModule(MatInputModule),
        MockModule(TranslateForChildModule),
        RouterTestingModule
      ],
      providers:[
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
