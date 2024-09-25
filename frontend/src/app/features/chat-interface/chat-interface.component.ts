import { CharacterInformationService } from './../../core/services/character-information.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';

export interface CharacterResponse {
  'character-name': string;
  'character-description': string;
}

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ChatInterfaceComponent implements OnInit, OnDestroy {
  private socket: Socket;
  characterName: string = '';
  characterDescription: String = '';
  isDescriptionVisible: boolean = false;

  messages: { text: string; sender: 'user' | 'bot' }[] = [
    { text: 'This is a test!', sender: 'bot' },
  ];
  userInput: string = '';
  isConnected = false;

  constructor(
    private characterInformationService: CharacterInformationService
  ) {
    this.socket = io('http://localhost:5000');
  }

  ngOnInit() {
    this.characterInformationService.getCharacter().subscribe({
      next: (response: CharacterResponse) => {
        this.characterName = response['character-name'];
        this.characterDescription = response['character-description'];
        console.log(
          'Character information:',
          this.characterName,
          this.characterDescription
        );
      },
      error: (error) => {
        console.error('Error getting character information:', error);
      },
    });

    this.socket.on('connect', () => {
      this.isConnected = true;
      console.log('Connected to server');
    });

    this.socket.on('disconnect', () => {
      this.isConnected = false;
      console.log('Disconnected from server');
    });

    this.socket.on('response', (response: { message: string }) => {
      this.messages.push({ text: response.message, sender: 'bot' });
    });

    this.socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.socket.emit('message', { message: this.userInput });
      this.userInput = '';
    }
  }

  toggleDescriptionVisibility() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
