/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockusersService } from './mockusers.service';

describe('Service: Mockusers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockusersService]
    });
  });

  it('should ...', inject([MockusersService], (service: MockusersService) => {
    expect(service).toBeTruthy();
  }));
});
