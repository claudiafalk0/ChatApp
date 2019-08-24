import { Component, OnInit } from '@angular/core';
import { ChatService } from '@src/app/chat.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  msg: string;
  messages: object[] = [];
  faPaperPlane = faPaperPlane;
  username: Subscription = this.auth
      .getUser$()
      .subscribe(user => this.username = user.nickname);

  constructor(private chatService: ChatService, private auth: AuthService) {
  }

  sendMessage() {
    this.chatService.sendMessage({name: this.username, message: this.msg});
    this.msg = '';
  }

  ngOnInit() {
    this.chatService
        .getMessages()
        .subscribe((msg: object) => {
          this.messages.push(msg);
          console.log(msg);
        });
  }
}
