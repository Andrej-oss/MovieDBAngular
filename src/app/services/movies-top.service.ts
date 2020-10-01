import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesTopService {

  constructor(private httpClient: HttpClient) {
  }

  getTopMovies(): Observable<Movies> {
    return this.httpClient.get<Movies>('https://api.themoviedb.org/3/movie/top_rated?api_key=ef5bdbc3f746cdfea8ca9f753778d4d1&language=en-US&page=1');
  }
}
