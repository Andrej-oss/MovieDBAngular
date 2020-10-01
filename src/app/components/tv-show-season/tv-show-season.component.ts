import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {TvShowSeason} from '../../models/tvShowSeason';
import {
  selectActorTvShow,
  selectCommentsShow,
  selectCrewTvShow,
  selectTrailersShow,
  selectTvShoeSeason
} from '../../logic-store/selectors/tvShows.selector';
import {DataThemeService} from '../../services/data-theme.service';
import {Actor, Crew} from '../../models/actorsCrewMovie';
import {Trailer} from '../../models/trailer';
import {Review} from '../../models/review';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-season',
  templateUrl: './tv-show-season.component.html',
  styleUrls: ['./tv-show-season.component.css']
})
export class TvShowSeasonComponent implements OnInit {
  season$: Observable<TvShowSeason[]> = this.store$.pipe(select(selectTvShoeSeason));
  actors$: Observable<Actor[]> = this.store$.pipe(select(selectActorTvShow));
  crew$: Observable<Crew[]> = this.store$.pipe(select(selectCrewTvShow));
  trailers$: Observable<Trailer[]> = this.store$.pipe(select(selectTrailersShow));
  comments$: Observable<Review[]> = this.store$.pipe(select(selectCommentsShow));
  isOpen: boolean;
  isOpenComments: boolean;
  blackPage = 'season-page-black';
  whitePage = 'season-page';
  private subscription: Subscription;
  lastPage: number;
  id: number;
  num: number;

  constructor(private store$: Store,
              public dataThemeService: DataThemeService,
              private actionStoreService: ActionStoreService,
              private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('num'))
    ).subscribe(data => this.num = +data);
  }

  ngOnInit(): void {
    this.dataThemeService.data.value.paginator = 'tvShowPaginator';
    if ( this.id > 0) {
      this.actionStoreService.getSeasonTvShow(this.id, this.num);
      this.actionStoreService.getTvShowTrailers(this.id);
      this.actionStoreService.getTvShowCredit(this.id);
      this.actionStoreService.getShowsComment(this.id);
    }
  }

  showComments(): void {
    this.isOpenComments = !this.isOpenComments;
  }

  getBiography(id: number): void {
    this.actionStoreService.getActorBiographyById(id, 'en-Us');
    this.actionStoreService.getMoviesByActor(id, 'en-Us');
  }

  showTrailers(): void {
    this.isOpen = !this.isOpen;
  }

  getEpisode(id: number, season: number, episode: number): void {
    debugger;
    this.dataThemeService.data.value.isTvSeasonsLoading = false;
    this.actionStoreService.EpisodeTvShow(id, season, episode);
    this.actionStoreService.getTrailerEpisode(id, season, episode);
    this.actionStoreService.getCreditsEpisodeTvShow(id, season, episode);
  }
}
