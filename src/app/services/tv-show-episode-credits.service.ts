import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActorsCrewMovie} from '../models/actorsCrewMovie';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowEpisodeCreditsService {

  constructor(private httpClient: HttpClient) {
  }

  getCreditsEpisode(tvId: number, season: number, id: number): Observable<ActorsCrewMovie> {
    debugger;
    return this.httpClient.get<ActorsCrewMovie>(`https://api.themoviedb.org/3/tv/${tvId}/season/${season}/episode/${id}/credits?api_key=${accessToken}`);
  }
}
