import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterRegistrationService {
  private apiUrl = 'http://localhost:5000/register-character';

  constructor(private http: HttpClient) {}

  registerCharacter(character: {
    character_name: string;
    character_description: string;
  }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, character, { headers });
  }
}
