import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from './message'

@Injectable()
export class ChatService {
  private url: string = 'http://localhost:3000';
  private socket;
  constructor() { }
  sendMessage(message: Message):void{
    this.socket.emit('mando-un-mensaje',message);
  }
  getMessages(){
    return new Observable(
      (observer)=>{
        // conexion con el servidor
        this.socket = io(this.url);
        // metodos de gestión de mensajes
        this.socket.on('connect',()=>{
          console.log("Cliente conectado con id: " + 
              this.socket.id)
        });
        this.socket.on('mando-un-mensaje',(datos)=>{
          observer.next(datos);
        });
        // Una forma de unsubscribe
        return ()=>{
          this.socket.disconnect();
        }
      }
    );
  }
}
