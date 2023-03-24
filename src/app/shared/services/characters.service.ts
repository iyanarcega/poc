import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';
import { CharactersFilter } from '../models/characters-filter.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(filter: CharactersFilter, page: number = 1): Observable<Character> {
    const params = new HttpParams()
    .set('page', String(page))
    .set('name', filter.name ?? '')
    .set('status', filter.status ?? '')
    .set('species', filter.species ?? '')
    .set('type', filter.type ?? '')
    .set('gender', filter.gender ?? '');
    return this.http
    .get<Character>(`${environment.apiUrl}/character`, { params})
    .pipe(
      // TODO throwError
    );
  }

  getCharacter(characterId: number): Observable<Character> {
    return this.http.get<Character>(`${environment.apiUrl}/character/${characterId}`);
  }
}
