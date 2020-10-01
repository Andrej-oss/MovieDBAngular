import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actors} from '../models/actor';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ActorsPostService {

  constructor(private httpClient: HttpClient) {
  }

  getActors(id: number, lang: string): Observable<Actors> {
    return this.httpClient.get<Actors>(`https://api.themoviedb.org/3/person/popular?api_key=${accessToken}&language=${lang}&page=${id}`);
  }
}
