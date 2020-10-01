import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActorsCrewMovie} from '../models/actorsCrewMovie';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowCreditsService {

  constructor(private httpClient: HttpClient) {
  }

  getCreditsShow(id: number): Observable<ActorsCrewMovie> {
    return this.httpClient.get<ActorsCrewMovie>(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${accessToken}&language=en-US`);
  }
}
