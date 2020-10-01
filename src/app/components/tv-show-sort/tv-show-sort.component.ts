import {Component, OnInit} from '@angular/core';
import {Option} from '../../models/option';
import {sortingTvOption} from '../../constants';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectTvCurPage} from '../../logic-store/selectors/tvShows.selector';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tv-show-sort',
  templateUrl: './tv-show-sort.component.html',
  styleUrls: ['./tv-show-sort.component.css']
})
export class TvShowSortComponent implements OnInit {
  searchForm: FormGroup;
  searchTv: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  selectOptions: Option[];
  currentPageTv$: Observable<number> = this.store$.pipe(select(selectTvCurPage));

  constructor(private actionStoreService: ActionStoreService, private store$: Store) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTv: this.searchTv
    });
    this.selectOptions = sortingTvOption;
  }

  getShowsSort(selectOption: any): void {
    debugger;
    this.actionStoreService.getTvShows(selectOption, 1);
  }

  onSearchMovie(searchTv: FormControl): void {
    this.actionStoreService.getTvShowSearch(searchTv.value, 1);
  }
}
