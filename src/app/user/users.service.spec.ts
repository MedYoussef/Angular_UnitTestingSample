import { TestBed, fakeAsync } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  // Test pour vérifier la validité des données provenant du service
  it('should return a user', fakeAsync(() => {
     const usersService : UsersService = TestBed.get(UsersService);
     let user;
     usersService.getUsers().subscribe((_user) => {
      user = _user
     });
    expect(user).toEqual({name: 'Youssef', age: 26})
  }));


  
});
