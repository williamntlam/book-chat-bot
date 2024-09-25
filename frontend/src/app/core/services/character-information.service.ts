import { CharacterResponse } from './../../features/chat-interface/chat-interface.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterInformationService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000/character';

  getCharacter(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.apiUrl);
  }
}
