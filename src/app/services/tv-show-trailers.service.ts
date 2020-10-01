import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trailers} from '../models/trailers';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowTrailersService {

  constructor(private httpClient: HttpClient) {
  }

  getTrailersShow(id: number): Observable<Trailers> {
    return this.httpClient
      .get<Trailers>(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${accessToken}&language=en-US`);
  }
}
