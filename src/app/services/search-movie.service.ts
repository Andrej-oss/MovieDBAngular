import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(private httpClient: HttpClient) {
  }

  getSearchMovies(search: string, id: number): Observable<Movies> {
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&language=en-US&query=${search}&page=${id}`);
  }
}
