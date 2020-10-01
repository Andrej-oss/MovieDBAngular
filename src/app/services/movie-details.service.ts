import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DetailMovie} from '../models/detailMovie';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private httpClient: HttpClient) {
  }

  getMovieDetails(id: number, lang: string): Observable<DetailMovie> {
    return this.httpClient.get<DetailMovie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${accessToken}&language=${lang}`);
  }
}
