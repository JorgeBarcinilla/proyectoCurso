import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { User } from '../models/user.model';
import { UserService } from './user.service';

fdescribe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;
  const mockResp: User[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        MockModule(HttpClientModule),
        HttpClientTestingModule
      ],
      providers: []
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('peticion de usuarios', () => {
    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockResp)
    })
    const req = httpController.expectOne({method: 'GET', url: 'https://62ce1596066bd2b6992faee8.mockapi.io/api/v1/users'});
    req.flush(mockResp)
  });
});
