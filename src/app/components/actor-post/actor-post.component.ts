import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../models/actor';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {selectCurPageActor} from '../../logic-store/selectors/movies.selector';
import {DataThemeService} from '../../services/data-theme.service';


@Component({
  selector: 'app-actor-post',
  templateUrl: './actor-post.component.html',
  styleUrls: ['./actor-post.component.css']
})
export class ActorPostComponent implements OnInit {
  currentPage$: Observable<number> = this.store$.pipe(select(selectCurPageActor));
  @Input()
  actors: Actor[];

  private subscription: Subscription;

  constructor(private actionStoreService: ActionStoreService,
              private store$: Store, private dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
    console.log(this.actors);
  }

  onGetActor(id: number): void {
    debugger;
    this.dataThemeService.data.value.isActorsMoviesLoading = false;
    this.actionStoreService.getActorBiographyById(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getMoviesByActor(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
  }

  onGetMovieActor(id: number): void {
    this.dataThemeService.data.value.isMovieDetailsLoading = false;
    this.actionStoreService.getDetailsMovie(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getTrailers(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getCommentsMovie(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getActors(id);
  }
}
