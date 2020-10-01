import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShowSeason} from '../models/tvShowSeason';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowSeasonService {

  constructor(private httpClient: HttpClient) {
  }

  getTvEpisode(id: number, num: number): Observable<TvShowSeason> {
    return this.httpClient.get<TvShowSeason>(`https://api.themoviedb.org/3/tv/${id}/season/${num}?api_key=${accessToken}&language=en-US`);
  }
}
