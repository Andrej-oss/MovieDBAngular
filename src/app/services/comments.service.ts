import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reviews} from '../models/review';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(id: number, lang: string): Observable<Reviews> {
    return this.httpClient.get<Reviews>(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${accessToken}&language=${lang}&page=1`);
  }
}
