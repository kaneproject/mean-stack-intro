import { Component, OnInit } from '@angular/core';

import { UsersService} from '../users.service';
@Component({
  selector: 'app-ejemplo03-provider',
  templateUrl: './ejemplo03-provider.component.html',
  styleUrls: ['./ejemplo03-provider.component.css'],
  providers: [ UsersService]
})
export class Ejemplo03ProviderComponent implements OnInit {

  private users: Array<string>;
  constructor(private service: UsersService) {
      this.users = service.getUsers();
   }

  ngOnInit() {
  }

}
