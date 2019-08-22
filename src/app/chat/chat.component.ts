import { Component, OnInit } from '@angular/core';
import { ChatService } from '@src/app/chat.service';
import {AuthService} from "@src/app/auth/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  msg: string;
  messages: string[] = [];

  constructor(private chatService: ChatService, public authService: AuthService) { }

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
