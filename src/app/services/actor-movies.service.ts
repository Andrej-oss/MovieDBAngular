import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Filmography} from '../models/filmography';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ActorMoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getMoviesActor(id: number, lang: string): Observable<Filmography> {
    debugger
    return this.httpClient
      .get<Filmography>(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${accessToken}&language=${lang}`);
  }
}
