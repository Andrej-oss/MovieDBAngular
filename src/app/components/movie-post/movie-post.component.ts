import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {Genre} from '../../models/genre';
import {selectGenres, selectOption} from '../../logic-store/selectors/movies.selector';
import {ActionStoreService} from '../../logic-store/actions/action.store.service';
import {DataThemeService} from '../../services/data-theme.service';

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrls: ['./movie-post.component.css'],
})
export class MoviePostComponent implements OnInit {

  @Input()
  movie: Movie;
  genre: Genre;
  sortOption$: Observable<string> = this.store$.pipe(select(selectOption));
  imgUrl: string;
  genres$: Observable<Genre[]> = this.store$.pipe(select(selectGenres));
  selectedGenres: any;
  private subscription: Subscription;

  constructor(private store$: Store,
              private actionStoreService: ActionStoreService,
              private dataThemeService: DataThemeService) {
  }

  ngOnInit(): void {
    this.imgUrl = `https://image.tmdb.org/t/p/w200${this.movie.poster_path}`;
  }


  onGetDetailsMovie(id: number): void {
    this.dataThemeService.data.value.isMovieDetailsLoading = false;
    debugger
    this.actionStoreService.getDetailsMovie(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getTrailers(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
    this.actionStoreService.getActors(id);
    this.actionStoreService.getCommentsMovie(id, this.dataThemeService.data.value.language.length > 0
      ? this.dataThemeService.data.value.language : 'en-Us');
  }
}
