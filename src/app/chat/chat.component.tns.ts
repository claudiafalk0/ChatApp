import { Component, OnInit } from '@angular/core';
import { ChatService } from '@src/app/chat.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  msg: string;
  messages = new ObservableArray();

  constructor(private chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.msg);
    this.msg = '';
  }

  ngOnInit() {
    this.chatService
        .getMessages()
        .subscribe((msg: string) => {
          this.messages.push(msg);
          console.log(msg);
        });
  }
}
