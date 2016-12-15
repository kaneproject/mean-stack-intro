import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private users = ["luis","alberto","rodrigo"];
  constructor() { }

  getUsers():Array<string>{
    // Aqui hago todo el trabajo sucio!
    return this.users;
  }
}
