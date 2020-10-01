import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShow, TvShows} from '../models/tvShow';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) {
  }

  getTvShows(sort: string, id: number): Observable<TvShows> {
    return this.httpClient.get<TvShows>(`https://api.themoviedb.org/3/discover/tv?api_key=${accessToken}&language=en-US&sort_by=${sort}&page=${id}`);
  }
}
