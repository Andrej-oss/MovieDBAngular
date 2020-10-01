import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {accessToken} from '../constants';
import {Trailers} from '../models/trailers';

@Injectable({
  providedIn: 'root'
})
export class TvEpisodeTrailerService {

  constructor(private httpClient: HttpClient) {
  }

  getEpisodeTrailer(tvId: number, season: number, id: number): Observable<Trailers> {
    return this.httpClient.get<Trailers>(`https://api.themoviedb.org/3/tv/${tvId}/season/${season}/episode/${id}/videos?api_key=${accessToken}&language=en-US`);
  }
}
