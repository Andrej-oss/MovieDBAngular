import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {accessToken} from '../constants';
import {Reviews} from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class TvShowCommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getCommentsTvShow(id: number): Observable<Reviews> {
    return this.httpClient.get<Reviews>(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${accessToken}&language=en-US&page=1`);
  }
}
