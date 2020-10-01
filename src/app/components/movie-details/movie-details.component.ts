import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {DetailMovie} from '../../models/detailMovie';
import {
  selectActors,
  selectComments,
  selectCrew,
  selectDetails,
  selectGenres,
  selectTrailers
} from '../../logic-store/selectors/movies.selector';
import {Genre} from '../../models/genre';
import {Trailer} from '../../models/trailer';
import {Actor, Crew} from '../../models/actorsCrewMovie';
import {Review} from '../../models/review';
import {DataThemeService} from '../../services/data-theme.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  isOpenComments: boolean;
  isOpen: boolean;
  movie$: Observable<DetailMovie[]> = this.store$.pipe(select(selectDetails));
  movie: DetailMovie;
  genres$: Observable<Genre[]> = this.store$.pipe(select(selectGenres));
  trailers$: Observable<Trailer[]> = this.store$.pipe(select(selectTrailers));
  actors$: Observable<Actor[]> = this.store$.pipe(select(selectActors));
  comments$: Observable<Review[]> = this.store$.pipe(select(selectComments));
  crew$: Observable<Crew[]> = this.store$.pipe(select(selectCrew));
  blackTheme = 'movie-detail-actors-black';
  whiteTheme = 'movie-detail-actors';
  blackPage = 'movie-page-black';
  whitePage = 'movie-page';
  movieId: number;
  sortOption: string;
  id: number;
  private subscription: Subscription;

  constructor(private store$: Store,
              public dataThemeService: DataThemeService,
              private activatedRoute: ActivatedRoute,
              private  actionStoreService: ActionStoreService) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('pageId'))
    )
      .subscribe(data => this.movieId = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(param => param.getAll('sortOption'))
    )
      .subscribe(data => this.sortOption = data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);
  }

  ngOnInit(): void {
    debugger;
    this.isOpen = false;
    this.isOpenComments = false;
    this.dataThemeService.data.value.paginator = 'moviePaginator';
    this.dataThemeService.data.value.isMovieDetailsLoading = false;
    if (this.dataThemeService.data.value.lastPage === 0 && !!this.movieId && this.movieId !== 0) {
      this.actionStoreService.getDetailsMovie(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getActors(this.movieId);
      this.actionStoreService.getCommentsMovie(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getTrailers(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
    } else if (this.id && this.sortOption && this.id > 0) {
      this.actionStoreService.getDetailsMovie(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getActors(this.movieId);
      this.actionStoreService.getCommentsMovie(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getTrailers(this.movieId,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
    } else if (this.id && !this.sortOption && this.id !== 0) {
      this.actionStoreService.getDetailsMovie(this.id,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getActors(this.id);
      this.actionStoreService.getCommentsMovie(this.id,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getTrailers(this.id,
        this.dataThemeService.data.value.language.length ? this.dataThemeService.data.value.language : 'en-Us');
    }
  }

  showTrailers(): void {
    this.isOpen = !this.isOpen;
  }

  showComments(): void {
    this.isOpenComments = !this.isOpenComments;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataThemeService.data.value.isMovieDetailsLoading = false;
    console.log(changes);
  }
}
