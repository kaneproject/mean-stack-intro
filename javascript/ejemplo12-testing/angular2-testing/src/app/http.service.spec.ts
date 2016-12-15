/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions,Response,ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing'

import { HttpService } from './http.service';


describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: 
(backend: MockBackend,defaultOptions: BaseRequestOptions)=>{
            return new Http(backend,defaultOptions);
          },
          deps: [MockBackend,BaseRequestOptions]
        }
        ]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
