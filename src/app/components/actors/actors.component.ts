import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../models/actorsCrewMovie';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {DataThemeService} from '../../services/data-theme.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  @Input()
  actor: Actor;
  language: string;
  private subscription: Subscription;

  constructor(private actionStoreService: ActionStoreService,
              private store$: Store,
              private dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
  }

  getBiography(id: number): void {
    this.dataThemeService.data.value.isActorsMoviesLoading = false;
    this.actionStoreService.getActorBiographyById(id, this.dataThemeService.data.value.language.length > 0 ? this.language : 'en-Us');
    this.actionStoreService.getMoviesByActor(id, this.dataThemeService.data.value.language.length > 0 ? this.language : 'en-Us');
  }
}
