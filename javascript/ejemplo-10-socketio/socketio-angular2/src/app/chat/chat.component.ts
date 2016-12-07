import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatService } from '../chat.service';
import { Message } from '../message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit,OnDestroy {
  private messages: Message[] = [];
  private message: Message;
  private connection;
  constructor(private service: ChatService) { }

  sendMessage(){
    this.service.sendMessage(this.message);
  }
  ngOnInit() {
    this.message = new Message("","");
    this.connection = this.service.getMessages().subscribe(
      (newMessage: Message)=>{
          console.log("New message received!");
          this.messages.push(newMessage);
      }
    )
  }
  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
