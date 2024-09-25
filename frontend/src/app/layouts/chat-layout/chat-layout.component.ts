import { Component } from '@angular/core';
import { ChatInterfaceComponent } from '../../features/chat-interface/chat-interface.component';

@Component({
  selector: 'app-chat-layout',
  standalone: true,
  imports: [ChatInterfaceComponent],
  templateUrl: './chat-layout.component.html',
  styleUrl: './chat-layout.component.css',
})
export class ChatLayoutComponent {}
