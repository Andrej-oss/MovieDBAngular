import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Option} from '../../models/option';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCurPage, selectOption} from '../../logic-store/selectors/movies.selector';
import {sortingOption} from '../../constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataThemeService} from '../../services/data-theme.service';


@Component({
  selector: 'app-sort-movies',
  templateUrl: './sort-movies.component.html',
  styleUrls: ['./sort-movies.component.css']
})
export class SortMoviesComponent implements OnInit, OnChanges {
  multiSearchForm: FormGroup;
  lang: FormControl = new FormControl();
  date: FormControl = new FormControl();
  sort: FormControl = new FormControl();
  country: FormControl = new FormControl();
  vote: FormControl = new FormControl();
  region: string;
  voteCount: FormControl = new FormControl('', Validators.pattern('[0-9]*$'));
  voteArray: number[];
  searchForm: FormGroup;
  search: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  selectOptions: Option[];
  value = 'Clear me';
  sortOption$: Observable<string> = this.store$.pipe(select(selectOption));
  currentPage$: Observable<number> = this.store$.pipe(select(selectCurPage));

  constructor(private actionStoreService: ActionStoreService,
              private store$: Store,
              private dataThemeService: DataThemeService) {
    this.voteArray = [...Array(10)];
    this.searchForm = new FormGroup({
      search: this.search
    });
    this.multiSearchForm = new FormGroup({
      lang: this.lang,
      date: this.date,
      sort: this.sort,
      country: this.country,
      vote: this.vote,
      voteCount: this.voteCount,
    });
  }

  ngOnInit(): void {
    this.selectOptions = sortingOption;
  }

  // tslint:disable-next-line:no-shadowed-variable
  getMoviesSort(selectOption: string): void {
    console.log(selectOption);
    this.dataThemeService.data.value.isMovieLoading = false;
    this.dataThemeService.data.value.language = '';
    this.actionStoreService.getMovies(selectOption, 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log(changes);
  }

  onSearchMovie(search: FormControl): void {
    this.dataThemeService.data.value.isMovieLoading = false;
    this.actionStoreService.getMoviesSearch(search.value, 1);
  }

  onMiltySearchMovie(searchForm: FormGroup): void {
    this.dataThemeService.data.value.isMovieLoading = false;
    debugger
    let strings = [''];
    if (searchForm.controls.date.value) {
      strings = searchForm.controls.date.value.split('-');
    }
    this.actionStoreService.getMultiSearch(searchForm.controls.lang.value ? searchForm.controls.lang.value : 'en-US',
      searchForm.controls.country.value, searchForm.controls.sort.value ? searchForm.controls.sort.value : 'popularity.desc',
      // tslint:disable-next-line:radix
      1, parseInt(strings[0]), parseInt(searchForm.controls.voteCount.value.trim()), parseInt(searchForm.controls.vote.value));
  }
}
