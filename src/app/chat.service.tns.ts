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
    this.socket = io.connect('http://10.0.0.91:3000', {});
  }

  public sendMessage(msg) {
    this.socket.emit('new-message', msg);
    console.log(this.socket);
  }

  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on('new-message', (msg) => {
        observer.next(msg);
      });
    });
  }
}
