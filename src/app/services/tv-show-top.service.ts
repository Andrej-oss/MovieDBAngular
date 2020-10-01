import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShows} from '../models/tvShow';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowTopService {

  constructor(private httpClient: HttpClient) {
  }

  getTopTvShow(): Observable<TvShows> {
    return this.httpClient.get<TvShows>(`https://api.themoviedb.org/3/tv/top_rated?api_key=${accessToken}&language=en-US&page=1`);
  }
}
