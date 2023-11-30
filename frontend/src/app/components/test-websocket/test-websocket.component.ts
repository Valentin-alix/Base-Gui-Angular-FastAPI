import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from '../../services/web-socket.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-test-websocket',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule],
  templateUrl: './test-websocket.component.html',
  styleUrl: './test-websocket.component.css',
})
export class TestWebsocketComponent {
  receivedMessages: Array<{ message: string }> = [];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.connect();
    this.webSocketService.messageReceived.subscribe((message: { message: string }) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage(): void {
    const message = 'Hello, WebSocket!';
    this.webSocketService.connection$?.next({ message: message });
  }

}
