import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TvShowEpisode} from '../models/tvShowSeason';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowEpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getEpisode(id: number, season: number, episode: number): Observable<TvShowEpisode> {
    return this.httpClient.get<TvShowEpisode>(`https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=${accessToken}&language=en-US`);
  }
}
