import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShowDetails} from '../models/ShowDetails';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private httpClient: HttpClient) { }
  getTvShowDetails(id: number): Observable<ShowDetails>{
    return this.httpClient.get<ShowDetails>(`https://api.themoviedb.org/3/tv/${id}?api_key=${accessToken}&language=en-US`);
  }
}
