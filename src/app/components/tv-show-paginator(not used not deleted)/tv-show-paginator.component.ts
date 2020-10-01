import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {pages, sortingTvOption} from '../../constants';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Store} from '@ngrx/store';
import {DataThemeService} from '../../services/data-theme.service';

@Component({
  selector: 'app-tv-show-paginator',
  templateUrl: './tv-show-paginator.component.html',
  styleUrls: ['./tv-show-paginator.component.css']
})
export class TvShowPaginatorComponent implements OnInit, OnChanges {
  @Input()
  sortOption: string;
  @Input()
  activePage: number;
  @Input()
  lastPage: number;
  @Output()
  paginator = [...pages];

  constructor(private  actionStoreService: ActionStoreService,
              private store$: Store,
              private dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log(changes);

    if (changes.activePage.currentValue && !changes.activePage.previousValue) {
      this.paginator = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
    }
    // tslint:disable-next-line:max-line-length
    else if (this.dataThemeService.data.value.paginator === 'tvShowPaginator' && changes.sortOption.currentValue !== undefined && !!changes.sortOption.previousValue && changes.sortOption.currentValue !== changes.sortOption.previousValue) {
      this.paginator = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
      console.log(pages);
    }
  }

  onGetMovies(sortOption: string, id: any): void {
    debugger
    const paginator1 = this.dataThemeService.data.value.paginator;
    const option1 = sortingTvOption.find(option => option.selectOption === this.sortOption);
    if (option1 && paginator1 === 'tvShowPaginator') {
      this.actionStoreService.getTvShows(sortOption, id);
    } else if (!option1 && paginator1 === 'tvShowPaginator') {
      this.actionStoreService.getTvShowSearch(sortOption, id);
    } else if (paginator1 === 'actorPaginator') {
      this.dataThemeService.data.value.actorSearch.length > 1
        ? this.actionStoreService.getSearchActors(this.dataThemeService.data.value.actorSearch, id, 'en-Us')
        : this.actionStoreService.getActorsPosts(id, 'en-Us');
    }
  }

  onNext(): any {
    return this.paginator.map(page => {
      if (page.id < this.lastPage - 9) {
        page.id = page.id + 10;
      }
    });
  }

  onPrevious(): any {
    return this.paginator.map(page => {
      if (page.id > 10) {
        page.id = page.id - 10;
      }
    });
  }
}
