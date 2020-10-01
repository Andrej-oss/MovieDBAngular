import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export interface Theme {
  darkTheme: boolean;
  paginator: string;
  isOpenHomePage: boolean;
  isMovieLoading: boolean;
  isShowsLoading: boolean;
  isActorLoading: boolean;
  isMovieDetailsLoading: boolean;
  isActorsMoviesLoading: boolean;
  isShowDetailLoading: boolean;
  isTvSeasonsLoading: boolean;
  lastPage: number;
  actorSearch: string;
  language: string;
  region: string;
  year: number;
  count: number;
  vote: number;
}

export class DataThemeService {
  data: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({
    darkTheme: false,
    paginator: '',
    isMovieLoading: false,
    isShowsLoading: false,
    isActorLoading: false,
    isMovieDetailsLoading: false,
    isActorsMoviesLoading: false,
    isShowDetailLoading: false,
    isTvSeasonsLoading: false,
    lastPage: 0,
    actorSearch: '',
    isOpenHomePage: false,
    language: '',
    region: '',
    year: 0,
    count: 0,
    vote: 0,
  });

  constructor() {
  }
}
