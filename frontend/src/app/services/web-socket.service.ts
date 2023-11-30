import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  apiUrl = environment.backendUrl
  connection$?: WebSocketSubject<any>;

  messageReceived = new Subject<{ message: string }>();

  constructor() { }

  connect(): Observable<any> {
    if (this.connection$ !== undefined) {
      return this.connection$
    }
    else {
      this.connection$ = webSocket(this.apiUrl.replace(/^http/, 'ws') + '/ws');
      this.connection$.subscribe((msg) => this.messageReceived.next(msg))
      return this.connection$
    }
  }
}
