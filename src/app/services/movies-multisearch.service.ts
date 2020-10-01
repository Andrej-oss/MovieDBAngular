import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MoviesMultiSearchService {

  constructor(private httpClient: HttpClient) {
  }

  getMultiSearchMovies(leng: string, reg: string, sort: string, id: number, year: number, count: number, vote: number): Observable<Movies> {
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&language=${leng}${{reg} === null ? `region=${reg}` : ''}&sort_by=${sort}&page=${id}${year ? `&year=${year}` : ''}${count ? `&vote_count.gte=${count}` : ''}${vote ? `&vote_average.gte=${vote}` : ''}`);
  }
}
