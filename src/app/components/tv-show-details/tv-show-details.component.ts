import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ShowDetails} from '../../models/ShowDetails';
import {
  selectActorTvShow,
  selectCommentsShow,
  selectCrewTvShow,
  selectDetailsShow,
  selectTrailersShow,
} from '../../logic-store/selectors/tvShows.selector';
import {Genre} from '../../models/genre';
import {selectGenres} from '../../logic-store/selectors/movies.selector';
import {Actor, Crew} from '../../models/actorsCrewMovie';
import {Trailer} from '../../models/trailer';
import {Review} from '../../models/review';
import {DataThemeService} from '../../services/data-theme.service';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit, OnChanges {
  tvShow$: Observable<ShowDetails[]> = this.store$.pipe(select(selectDetailsShow));
  genres$: Observable<Genre[]> = this.store$.pipe(select(selectGenres));
  actors$: Observable<Actor[]> = this.store$.pipe(select(selectActorTvShow));
  crew$: Observable<Crew[]> = this.store$.pipe(select(selectCrewTvShow));
  trailers$: Observable<Trailer[]> = this.store$.pipe(select(selectTrailersShow));
  comments$: Observable<Review[]> = this.store$.pipe(select(selectCommentsShow));
  isOpen: boolean;
  isOpenComments: boolean;
  blackTheme = 'movie-detail-actors-black';
  whiteTheme = 'movie-detail-actors';
  blackPage = 'movie-page-black';
  whitePage = 'movie-page';
  showId: number;
  lastPage: number;
  id: number;
  sortOption: string;
  private subscription: Subscription;

  constructor(private store$: Store,
              public dataThemeService: DataThemeService,
              private actionStoreService: ActionStoreService,
              private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('pageId'))
    )
      .subscribe(data => this.showId = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('sortOption'))
    )
      .subscribe(data => this.sortOption = data);
  }

  ngOnInit(): void {
    this.isOpen = false;
    this.isOpenComments = false;
    this.dataThemeService.data.value.paginator = 'tvShowPaginator';
    debugger;
    if (this.dataThemeService.data.value.lastPage === 0 && this.showId !== 0) {
      this.actionStoreService.getTvShowTrailers(this.showId);
      this.actionStoreService.getShowsComment(this.showId);
      this.actionStoreService.getTvShowsDetail(this.showId);
      this.actionStoreService.getTvShowCredit(this.showId);
      this.actionStoreService.getTvShows(this.sortOption, this.id);
    } else if (this.showId && this.sortOption && this.showId > 1) {
      this.actionStoreService.getTvShows(this.sortOption, this.id);
      this.actionStoreService.getTvShowTrailers(this.showId);
      this.actionStoreService.getShowsComment(this.showId);
      this.actionStoreService.getTvShowsDetail(this.showId);
      this.actionStoreService.getTvShowCredit(this.showId);
    }
  }

  showTrailers(): void {
    this.isOpen = !this.isOpen;
  }

  showComments(): void {
    this.isOpenComments = !this.isOpenComments;
  }

  onGetSeason(id: number, num: number): void {
    this.dataThemeService.data.value.isTvSeasonsLoading = false;
    this.actionStoreService.getSeasonTvShow(id, num);
    this.actionStoreService.getTvShowTrailers(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
