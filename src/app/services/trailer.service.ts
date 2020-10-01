import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {accessToken} from '../constants';
import {Trailers} from '../models/trailers';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private httpClient: HttpClient) {
  }

  getTrailers(id: number, lang: string): Observable<Trailers> {
    return this.httpClient.get<Trailers>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${accessToken}&language=${lang}`);
  }
}
