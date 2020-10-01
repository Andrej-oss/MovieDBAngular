import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {accessToken} from '../constants';
import {Genre} from '../models/genre';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}`);
  }
}
