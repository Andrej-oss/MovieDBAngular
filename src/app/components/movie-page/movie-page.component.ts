import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {
  selectCurPage,
  selectGenres,
  selectMovies,
  selectOption,
} from '../../logic-store/selectors/movies.selector';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Genre} from '../../models/genre';
import {pages} from '../../constants';
import { sortingOption } from '../../constants';
import {Option} from '../../models/option';
import {DataThemeService} from '../../services/data-theme.service';
import {RouterCheckService} from '../../services/router-check.service';
import {ActivatedRoute} from '@angular/router';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit, OnChanges {
  movies$: Observable<any> = this.store$.pipe(select(selectMovies)) ;
  genres$: Observable<Genre[]> = this.store$.pipe(select(selectGenres));
  sortOption$: Observable<string> = this.store$.pipe(select(selectOption));
  currentPage$: Observable<number> = this.store$.pipe(select(selectCurPage));
  paginator: any[];
  error$: Observable<any>;
  sortOption: Option[];
  blackTheme = 'movie-page-black';
  whiteTheme = 'movie-page';
  id: number;
  selectOption: string;
  lastPage: number;
  current: number;
  private subscription: Subscription;
  constructor(private movieService: MoviesService,
              private store$: Store,
              private actionStoreService: ActionStoreService,
              private routerCheckService: RouterCheckService,
              public dataThemeService: DataThemeService,
              private activatedRoute: ActivatedRoute) {
    debugger
    this.paginator = pages;
    this.subscription =  this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('sortOption'))
    )
      .subscribe(data => this.selectOption = data);
    this.subscription = this.store$.pipe(select(selectCurPage))
     .subscribe(data => this.current = data);
    console.log(this.id);
    console.log(this.selectOption);
    console.log(this.lastPage);
  }

  ngOnInit(): void {
    debugger;
    this.sortOption = sortingOption;
    const option1 = sortingOption.find(option => option.selectOption === this.selectOption);
    if ( this.id !== 0 && !this.dataThemeService.data.value.language.length && option1) {
    this.actionStoreService.getMovies(this.selectOption, this.id);
  }
    // tslint:disable-next-line:max-line-length
    else if (this.dataThemeService.data.value.lastPage === 0 && this.id !== 0 && !this.dataThemeService.data.value.language.length && !option1){
      this.actionStoreService.getMoviesSearch(this.selectOption, this.id);
    }
  else if (this.dataThemeService.data.value.lastPage === 0 && this.id !== 0 && !this.dataThemeService.data.value.language.length){
    this.actionStoreService.getMultiSearch(this.dataThemeService.data.value.language,
      this.dataThemeService.data.value.region, this.selectOption, this.id, this.dataThemeService.data.value.year,
      this.dataThemeService.data.value.count, this.dataThemeService.data.value.vote);
  }
    this.dataThemeService.data.value.paginator = 'moviePaginator';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.current !== this.id){
      this.actionStoreService.getMovies(this.selectOption, this.id);
    }
    else if (this.lastPage === 0 && this.id !== 0 && this.dataThemeService.data.value.language.length){
      this.actionStoreService.getMultiSearch(this.dataThemeService.data.value.language,
        this.dataThemeService.data.value.region, this.selectOption, this.id,
        this.dataThemeService.data.value.year, this.dataThemeService.data.value.count, this.dataThemeService.data.value.vote);
    }
  }
}
