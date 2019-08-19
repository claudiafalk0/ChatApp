import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket;

  constructor() {
    this.socket = io(environment.chatUrl);
  }

  public sendMessage(msg) {
    this.socket.emit('new-message', msg);
  }

  // public getMessages(): Observable<string> {
  //   return new Observable<string>(observer => {
  //     this.socket.on('new-message', (data: string) => observer.next(data));
  //   });
  // }

  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on('new-message', (msg) => {
        observer.next(msg);
      });
    });
  }
}
