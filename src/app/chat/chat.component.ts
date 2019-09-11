import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '@src/app/chat.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('chatContainer', {static: false}) private chatContainer: ElementRef;
  msg: string;
  messages: object[] = [];
  faPaperPlane = faPaperPlane;
  username: Subscription = this.auth
      .getUser$()
      .subscribe(user => this.username = user.nickname);

  constructor(private chatService: ChatService, private auth: AuthService) {
  }

  sendMessage() {
    this.chatService.sendMessage({name: this.username, message: this.msg, timestamp: moment().format('hh:mm A')});
    this.msg = '';
  }

  scrollToBottom() {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.chatService
        .getMessages()
        .pipe(
            distinctUntilChanged((prev: any, curr: any) => prev.name.concat(prev.message) === curr.name.concat(curr.message)),
            filter((msg: any) => msg.message.trim().length > 0)
        )
        .subscribe((msg: object) => {
          this.messages.push(msg);
          console.log(msg);
        });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

}
