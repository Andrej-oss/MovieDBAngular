import {Component, Input, OnInit} from '@angular/core';
import {DataThemeService} from '../../services/data-theme.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Movie} from '../../models/movie';
import {TvShow} from '../../models/tvShow';
import {Actor} from '../../models/actor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  topMovies: Movie[];
  @Input()
  topShows: TvShow[];
  @Input()
  actors: Actor[];
  blackTheme = 'home-page-black';
  whiteTheme = 'home-page';
  private subscription: Subscription;
  id: string;
  sort: string;

  constructor(public dataThemeService: DataThemeService,
              private activatedRoute: ActivatedRoute
  ) {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = data);
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('sortOption'))
    ).subscribe(data => this.sort = data);
  }

  ngOnInit(): void {
    console.log(this.actors);
  }

}
