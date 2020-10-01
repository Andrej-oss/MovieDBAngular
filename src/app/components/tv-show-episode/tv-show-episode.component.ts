import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {DataThemeService} from '../../services/data-theme.service';
import {Observable, Subscription} from 'rxjs';
import {TvShowEpisode} from '../../models/tvShowSeason';
import {
  selectActorTvShow, selectCrewTvShow,
  selectEpisodeTrailer,
  selectTvEpisode
} from '../../logic-store/selectors/tvShows.selector';
import {Trailer} from '../../models/trailer';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Actor, Crew} from '../../models/actorsCrewMovie';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-tv-show-episode',
  templateUrl: './tv-show-episode.component.html',
  styleUrls: ['./tv-show-episode.component.css']
})
export class TvShowEpisodeComponent implements OnInit {
  episode$: Observable<TvShowEpisode[]> = this.store$.pipe(select(selectTvEpisode));
  trailers$: Observable<Trailer[]> = this.store$.pipe(select(selectEpisodeTrailer));
  actors$: Observable<Actor[]> = this.store$.pipe(select(selectActorTvShow));
  crew$: Observable<Crew[]> = this.store$.pipe(select(selectCrewTvShow));
  blackPage = 'movie-page-black';
  whitePage = 'movie-page';
  isTrailerOpen: boolean;
  episode: number;
  num: number;
  id: number;
  private subscription: Subscription;

  constructor(private store$: Store,
              private activatedRoute: ActivatedRoute,
              public dataThemeService: DataThemeService,
              private actionStoreService: ActionStoreService) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(param => param.getAll('episode'))
    ).subscribe(data => this.episode = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(param => param.getAll('id'))
    ).subscribe(data => this.id = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(param => param.getAll('num'))
    ).subscribe(data => this.num = +data);
  }

  ngOnInit(): void {
    debugger;
    this.isTrailerOpen = false;
    this.dataThemeService.data.value.paginator = 'tvShowPaginator';
    if (  this.id > 0) {
      this.actionStoreService.getCreditsEpisodeTvShow(this.id, this.num, this.episode);
      this.actionStoreService.getTrailerEpisode(this.id, this.num, this.episode);
      this.actionStoreService.EpisodeTvShow(this.id, this.num, this.episode);
      this.actionStoreService.getShowsComment(this.id);
    }
  }

  showTrailers(): void {
    this.isTrailerOpen = !this.isTrailerOpen;
  }
}
