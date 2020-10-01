import {Component, Input, OnInit} from '@angular/core';
import {Crew} from '../../models/actorsCrewMovie';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {DataThemeService} from '../../services/data-theme.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  @Input()
  person: Crew;
  private subscription: Subscription;

  constructor(private actionStoreService: ActionStoreService,
              private store$: Store, public dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
  }

  getBiography(id: number): void {
    this.actionStoreService.getActorBiographyById(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getMoviesByActor(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
  }
}
