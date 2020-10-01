import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ActorBiography} from '../../models/actorBiography';
import {selectBiography, selectMoviesActor} from '../../logic-store/selectors/movies.selector';
import {Cast} from '../../models/filmography';
import {MatPaginator} from '@angular/material/paginator';
import {DataThemeService} from '../../services/data-theme.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css']
})
export class ActorPageComponent implements OnInit {
  actor$: Observable<ActorBiography[]> = this.store$.pipe(select(selectBiography));
  movies$: Observable<Cast[]> = this.store$.pipe(select(selectMoviesActor));
  displayedColumns: string[] = ['position', 'name', 'weight', 'overview', 'character'];
  blackTheme = 'actor-list-black';
  whiteTheme = 'actor-list';
  black = 'background-color: black';
  white = 'background-color: white';
  blackColor = 'color: white';
  whiteColor = 'color: black';
  id: number;
  lastPage: number = this.dataThemeService.data.value.lastPage;
  private subscription: Subscription;
  actor: ActorBiography[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store$: Store,
              public dataThemeService: DataThemeService,
              private activatedRoute: ActivatedRoute,
              private actionStoreService: ActionStoreService) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(param => param.getAll('id'))
    )
      .subscribe(data => this.id = +data);
    this.subscription = this.store$.pipe(select(selectBiography)).subscribe(data => this.actor = data);
  }

  ngOnInit(): void {
    this.dataThemeService.data.value.paginator = 'actorPaginator';
    console.log(this.lastPage);
    debugger;
    if (this.id !== 0 && this.lastPage === 0 && this.actor.length > 0) {
      debugger;
      this.actionStoreService.getActorBiographyById(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getMoviesByActor(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
    } else if (this.id !== 0 && this.lastPage === 0) {
      debugger;
      this.actionStoreService.getActorBiographyById(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getMoviesByActor(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
    } else if (this.id !== 0 && this.lastPage !== 0 && this.actor.length === 0) {
      debugger;
      this.actionStoreService.getActorBiographyById(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
      this.actionStoreService.getMoviesByActor(this.id, this.dataThemeService.data.value.language.length > 0
        ? this.dataThemeService.data.value.language : 'en-Us');
    }
  }

}
