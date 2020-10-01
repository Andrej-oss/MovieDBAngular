import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShows} from '../models/tvShow';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowSearchService {

  constructor(private httpClient: HttpClient) {
  }

  getSearchTvShow(search: string, id: number): Observable<TvShows> {
    return this.httpClient.get<TvShows>(`https://api.themoviedb.org/3/search/tv?api_key=${accessToken}&language=en-US&page=${id}&query=${search}`);
  }
}
