import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActorBiography} from '../models/actorBiography';
import {accessToken} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ActorBiographyService {

  constructor(private httpClient: HttpClient) { }
  getActorBiography(id: number, lang: string): Observable<ActorBiography>{
    debugger
    return this.httpClient.get<ActorBiography>(`https://api.themoviedb.org/3/person/${id}?api_key=${accessToken}&language=${lang}`);
  }
}
