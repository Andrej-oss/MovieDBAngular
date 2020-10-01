import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataThemeService} from '../../services/data-theme.service';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {
  selectActorCurrPage, selectActors,
  selectActorsPost,
} from '../../logic-store/selectors/movies.selector';
import {Actor} from '../../models/actor';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.css']
})
export class ActorsPageComponent implements OnInit, OnChanges {
  blackTheme = 'actors-page-black';
  whiteTheme = 'actors-page';
  searchForm: FormGroup;
  search: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  // @ts-ignore
  actor$: Observable<Actor[]> = this.store$.pipe(select(selectActorsPost));
  actorId: number;
  searchActor = '';
  actors: Actor[];
  currentPage$: Observable<number> = this.store$.pipe(select(selectActorCurrPage));
  private subscription: Subscription;

  constructor(public dataThemeService: DataThemeService,
              private store$: Store,
              private actionStoreService: ActionStoreService,
              private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.actorId = +data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('search'))
    ).subscribe(data => this.searchActor = data);
    // @ts-ignore
    this.subscription = this.store$.pipe(select(selectActorsPost)).subscribe(data => this.actors = data);
  }

  ngOnInit(): void {
    debugger;
    console.log(this.dataThemeService.data.value.lastPage);
    this.dataThemeService.data.value.paginator = 'actorPaginator';
    this.searchForm = new FormGroup({
      search: this.search
    });
    if (this.actorId > 0 && this.dataThemeService.data.value.lastPage === 0 && !this.searchActor.length) {
      this.actionStoreService.getActorsPosts(this.actorId, 'en-US');
    } else if (this.actorId > 0 && this.dataThemeService.data.value.lastPage === 0 && this.searchActor.length > 0) {
      // @ts-ignore
      this.actionStoreService.getSearchActors(this.searchActor, this.actorId, 'en-Us');
    } else if (this.actorId > 0 && !this.actors.length && this.searchActor.length) {
      // @ts-ignore
      debugger;
      this.actionStoreService.getSearchActors(this.searchActor, this.actorId, 'en-Us');
    } else if (this.actorId > 0 && !this.actors.length && !this.searchActor.length) {
      this.actionStoreService.getActorsPosts(this.actorId, 'en-US');
    }
  }

  onSearchActor(search: FormControl): void {
    debugger;
    this.dataThemeService.data.value.isActorLoading = false;
    this.actionStoreService.getSearchActors(search.value, 1, 'en-Us');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
