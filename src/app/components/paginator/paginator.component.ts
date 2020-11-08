import {Component, Input, OnInit, OnChanges, SimpleChanges, Output} from '@angular/core';
import {pages, sortingOption, sortingTvOption} from '../../constants';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {DataThemeService} from '../../services/data-theme.service';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input()
  sortOption: string;
  @Input()
  activePage: number;
  private subscription: Subscription;
  currentPage: number;
  @Output()
  paginator = [...pages];
  key: number;

  constructor(private  actionStoreService: ActionStoreService,
              private store$: Store,
              private activatedRoute: ActivatedRoute,
              private dataThemeService: DataThemeService) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('pageId'))
    ).subscribe(data => this.currentPage = +data);
    this.onPaginator();
  }

  ngOnInit(): void {
    debugger;
    this.key = this.dataThemeService.data.value.lastPage - (this.paginator[0].id - 1);
    console.log(this.paginator);
     if (this.activePage < 10){
       this.paginator = [{id: 1}, { id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
     }
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log(changes);
     /*if (changes.sortOption.currentValue !== changes.sortOption.previousValue){
       this.paginator =  [{id: 1}, { id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
       console.log(pages);
     }*/
    // tslint:disable-next-line:max-line-length
    if (this.dataThemeService.data.value.paginator !== 'actorPaginator' && changes.sortOption.previousValue &&
      changes.sortOption.currentValue
      && changes.sortOption.previousValue !== changes.sortOption.currentValue) {
      this.paginator = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
    }
    if (this.key < 10) {
      this.key = this.dataThemeService.data.value.lastPage - (this.paginator[0].id - 1);
    }
  }

  onGetMovies(sortOption: string, id: any): void {
    debugger;
    this.dataThemeService.data.value.isMovieLoading = false;
    if (this.dataThemeService.data.value.paginator === 'moviePaginator') {
      this.dataThemeService.data.value.isMovieLoading = false;
      const option1 = sortingOption.find(option => option.selectOption === this.sortOption);
      if (option1 && !this.dataThemeService.data.value.language.length) {
        this.actionStoreService.getMovies(sortOption, id);
      } else if (!option1 && !this.dataThemeService.data.value.language.length) {
        this.actionStoreService.getMoviesSearch(sortOption, id);
      }
      debugger;
      if (this.dataThemeService.data.value.language.length) {
        this.actionStoreService.getMultiSearch(this.dataThemeService.data.value.language,
          this.dataThemeService.data.value.region, this.sortOption, id,
          this.dataThemeService.data.value.year, this.dataThemeService.data.value.count, this.dataThemeService.data.value.vote);
      }
    } else if (this.dataThemeService.data.value.paginator === 'tvShowPaginator') {
      this.dataThemeService.data.value.isShowsLoading = false;
      const option2 = sortingTvOption.find(option => option.selectOption === this.sortOption);
      if (option2) {
        this.actionStoreService.getTvShows(sortOption, id);
      }
      if (!option2) {
        this.actionStoreService.getTvShowSearch(sortOption, id);
      }
    } else if (this.dataThemeService.data.value.paginator === 'actorPaginator') {
      this.dataThemeService.data.value.isActorLoading = false;
      this.dataThemeService.data.value.actorSearch.length > 1
        ? this.actionStoreService.getSearchActors(this.dataThemeService.data.value.actorSearch, id, 'en-Us')
        : this.actionStoreService.getActorsPosts(id, 'en-Us');
    }
  }

  onNext(): void {
    debugger;
    console.log(this.key);
    if (this.key !== this.dataThemeService.data.value.lastPage - (this.paginator[0].id - 1)) {
      this.key = this.dataThemeService.data.value.lastPage - (this.paginator[0].id - 1);
    }
    if (this.key > 10) {
      this.paginator.map(page => {
        page.id = page.id + 10;
      });
      this.key = this.key - 10;
    }
  }

  onPrevious(): void {
    debugger;
    this.paginator.map(page => {
      if (page.id > 10) {
        page.id = page.id - 10;
      }
    });
    this.key = this.key + 10;
  }

  onPaginator(): {} {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.currentPage = +data);
    const strings = this.currentPage.toString().split('');
    if (this.currentPage > 0 && this.currentPage <= 10) {
      return this.paginator = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
    } else if (this.currentPage > 10 && this.currentPage < 100 && strings[1] !== '0') {
      strings.splice(1, 1, '1');
      // tslint:disable-next-line:radix
      const s = parseInt(strings.join(''));
      return this.paginator.map((page, index) => {
        while (index <= 10) {
          return page.id = (s + index);
        }
      });
    } else if (this.currentPage > 10 && this.currentPage < 100 && strings[1] === '0') {
      // tslint:disable-next-line:radix
      strings.splice(0, 2, `${parseInt(strings[0]) - 1}`, `${parseInt(strings[1]) + 1}`);
      // tslint:disable-next-line:radix
      const s1 = parseInt(strings.join(''));
      return this.paginator.map((page, index) => {
        while (index <= 10) {
          return page.id = (s1 + index);
        }
      });
      console.log(s1);
    } else if (this.currentPage > 100 && this.currentPage < 1000 && strings[2] !== '0') {
      strings.splice(2, 1, '1');
      // tslint:disable-next-line:radix
      const pagesOver100 = parseInt(strings.join(''));
      return this.paginator.map((page, index) => {
        while (index <= 10) {
          return page.id = (pagesOver100 + index);
        }
      });
    } else if (this.currentPage > 100 && this.currentPage < 1000 && strings[2] === '0' && strings[1] !== '0') {
      // tslint:disable-next-line:radix
      strings.splice(1, 2, `${parseInt(strings[1]) - 1}`, `${parseInt(strings[2] + 1)}`);
      // tslint:disable-next-line:radix
      const s3 = parseInt(strings.join(''));
      console.log(s3);
      return this.paginator.map((page, index) => {
        while (index <= 10) {
          return page.id = s3 + index;
        }
      });
    } else if (this.currentPage > 100 && strings[1] === '0' && strings[2] === '0') {
      // tslint:disable-next-line:radix
      const v = parseInt(strings.join('')) - 9;
      return this.paginator.map((page, index) => {
        while (index <= 10) {
          return page.id = v + index;
        }
      });
    }
  }
}
