import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Observable, Subscription} from 'rxjs';
import {selectCurPage, selectCurPageActor, selectOption} from '../../logic-store/selectors/movies.selector';
import {selectTvCurPage} from '../../logic-store/selectors/tvShows.selector';
import {DataThemeService} from '../../services/data-theme.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Movies} from '../../models/movies';
import {MoviesTopService} from '../../services/movies-top.service';
import {TvShows} from '../../models/tvShow';
import {TvShowTopService} from '../../services/tv-show-top.service';
import {Actors} from '../../models/actor';
import {ActorsPostService} from '../../services/actors-post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'moviesProjectOnAngular';
  sortOption$: Observable<string> = this.store$.pipe(select(selectOption));
  currentPage$: Observable<number> = this.store$.pipe(select(selectCurPage));
  currentPageTv$: Observable<number> = this.store$.pipe(select(selectTvCurPage));
  currentActorsPage$: Observable<number> = this.store$.pipe(select(selectCurPageActor));
routerLink: string;
isDark: boolean = this.dataThemeService.data.value.darkTheme;
darkClass: string;
whiteClass: string;
id: number;
sortOption: string;
lastPage: number;
isActiveMovie: boolean;
isActiveActor: boolean;
isActiveTv: boolean;
private subscription: Subscription;
moviesTop: Movies;
topShows: TvShows;
actors: Actors;
  constructor(private store$: Store,
              private actionStoreService: ActionStoreService,
              public dataThemeService: DataThemeService,
              private activatedRoute: ActivatedRoute,
              private moviesTopService: MoviesTopService,
              private tvShowTopService: TvShowTopService,
              private actorsPostService: ActorsPostService) {
this.subscription = this.activatedRoute.paramMap.pipe(
  switchMap(params => params.getAll('id'))
)
  .subscribe(data => this.id = +data);
this.subscription = this.activatedRoute.paramMap.pipe(
  switchMap(params => params.getAll('sortOption'))
)
  .subscribe(data => this.sortOption = data);
console.log(this.id);
console.log(this.sortOption);
  }
 ngOnInit(): void {
   this.actionStoreService.getGenres();
   this.darkClass = 'movies-project-black';
   this.whiteClass = 'movies-project-white';
   this.isActiveActor = false;
   this.isActiveMovie = false;
   this.isActiveTv = false;
   this.moviesTopService.getTopMovies().subscribe(data => this.moviesTop = data);
   this.tvShowTopService.getTopTvShow().subscribe(data => this.topShows = data);
   this.actorsPostService.getActors(1, 'en-Us').subscribe(data => this.actors = data);
 }

  onChangeTheme(): void{
    console.log(this.isDark);
    this.dataThemeService.data.value.darkTheme = !this.dataThemeService.data.value.darkTheme;
    console.log(this.isDark);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getMoviePaginator(): void{
    this.actionStoreService.getMovies('popularity.desc', 1);
    this.dataThemeService.data.value.paginator = 'moviePaginator';
  }

  getTvShowPaginator(): void{
    this.actionStoreService.getTvShows('popularity.desc', 1)
    this.dataThemeService.data.value.paginator = 'tvShowPaginator';
  }

  getActorPaginator(): void{
    this.dataThemeService.data.value.paginator = 'actorPaginator';
    this.actionStoreService.getActorsPosts(1, 'en-Us');
  }

    getMovieClass(): void{
      this.isActiveMovie = true;
      this.isActiveActor = false;
      this.isActiveTv = false;
    }

    getActorClass(): void{
        this.isActiveActor = true;
        this.isActiveMovie = false;
        this.isActiveTv = false;
    }

    getTvClass(): void{
        this.isActiveTv = true;
        this.isActiveMovie = false;
        this.isActiveActor = false;
    }
}

