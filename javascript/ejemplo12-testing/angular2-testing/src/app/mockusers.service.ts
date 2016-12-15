import { Injectable } from '@angular/core';

@Injectable()
export class MockusersService {

  constructor() { }
getUsers():Array<string>{
    // Aqui no hago nada
    return ["tu","y yo"];
  }
}
