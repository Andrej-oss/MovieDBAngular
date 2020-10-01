import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActorsCrewMovie} from '../models/actorsCrewMovie';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private httpClient: HttpClient) {
  }

  getActors(id: number): Observable<ActorsCrewMovie> {
    return this.httpClient.get<ActorsCrewMovie>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${accessToken}`);
  }
}
