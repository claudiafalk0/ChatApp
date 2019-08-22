import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import * as io from 'nativescript-socket.io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket;

  constructor() {
    io.enableDebug();
    this.socket = io.connect(environment.chatUrl, {});
  }

  public sendMessage(msg) {
    this.socket.emit('new-message', msg);
  }

  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on('new-message', (msg) => {
        observer.next(msg);
      });
    });
  }
}
