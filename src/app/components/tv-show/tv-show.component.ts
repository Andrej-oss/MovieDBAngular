import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Observable, Subscription} from 'rxjs';
import {TvShow} from '../../models/tvShow';
import {selectGenres} from '../../logic-store/selectors/movies.selector';
import {Genre} from '../../models/genre';
import {Option} from '../../models/option';
import {sortingTvOption} from '../../constants';
import {selectTvCurPage, selectTvShow, selectTvSortOption} from '../../logic-store/selectors/tvShows.selector';
import {DataThemeService} from '../../services/data-theme.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ShowsService} from '../../services/shows.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit, OnChanges, DoCheck {
  tvShows$: Observable<TvShow[]> = this.store$.pipe(select(selectTvShow));
  tvShows: TvShow[];
  genres$: Observable<Genre[]> = this.store$.pipe(select(selectGenres));
  selectTvOption: Option[];
  currentPage$: Observable<number> = this.store$.pipe(select(selectTvCurPage));
  selectOption$: Observable<string> = this.store$.pipe(select(selectTvSortOption));
  blackTheme = 'movie-page-black';
  whiteTheme = 'movie-page';
  sortOption: string;
  id: number;
  lastPage: number = this.dataThemeService.data.value.lastPage;
  private subscription: Subscription;

  constructor(private store$: Store,
              private actionStoreService: ActionStoreService,
              public dataThemeService: DataThemeService,
              public showsService: ShowsService,
              private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('sortOption'))
    )
      .subscribe(data => this.sortOption = data);

    this.subscription = this.store$.pipe(select(selectTvShow))
      .subscribe(data => this.tvShows = data);
  }

  ngOnInit(): void {
    this.dataThemeService.data.value.paginator = 'tvShowPaginator';
    this.selectTvOption = sortingTvOption;
    debugger;
    const option1 = sortingTvOption.find(option => option.selectOption === this.sortOption);
    if (this.lastPage === 0 && this.id !== 0 && option1) {
      this.actionStoreService.getTvShows(this.sortOption, this.id);
    } else if (this.lastPage === 0 && this.id !== 0 && !option1) {
      this.actionStoreService.getTvShowSearch(this.sortOption, this.id);
    } else if (!this.tvShows.length && this.id !== 0 && option1) {
      this.actionStoreService.getTvShows(this.sortOption, this.id);
    } else if (!this.tvShows.length && this.id !== 0 && !option1) {
      this.actionStoreService.getTvShowSearch(this.sortOption, this.id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }

}
