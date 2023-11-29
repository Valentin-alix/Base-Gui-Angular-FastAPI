import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-test-websocket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-websocket.component.html',
  styleUrl: './test-websocket.component.css',
  providers: [WebSocketService]
})
export class TestWebsocketComponent {
  receivedMessages: string[] = [];

  constructor(private webSocketService: WebSocketService){}

  ngOnInit(): void {
    this.webSocketService.connect();
    this.webSocketService.messageReceived.subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage(): void {
    const message = 'Hello, WebSocket!';
    this.webSocketService.sendMessage(message);
  }

}
