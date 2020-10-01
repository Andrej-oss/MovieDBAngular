import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { accessToken } from '../constants';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }
  getMovies(selectOption: string, id: number): Observable<Movies>{
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&language=en-US&sort_by=${selectOption}&page=${id}`);
  }
}
