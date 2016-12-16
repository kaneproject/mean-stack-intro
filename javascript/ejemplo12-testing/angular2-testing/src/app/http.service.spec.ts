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

  beforeEach(inject([MockBackend],(backend: MockBackend)=>{
    const miResponse = new Response(
      new ResponseOptions({body:"toma billetes!!"})
      );
      backend
      .connections
      .subscribe((conn)=>{conn.mockRespond(miResponse)});
  }));

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('A ver si el servicio me devuelve billetes',inject([HttpService],(service: HttpService)=>{
      service.gimmeTheMoney().subscribe((response: Response)=>{
        expect(response.text()).toBe("toma billetes!!");
      })
  }));

});
