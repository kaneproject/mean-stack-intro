import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { 
  }

  gimmeTheMoney(){
    return this.http.get("www.takeitallbaby.noexiste");
  }

}
