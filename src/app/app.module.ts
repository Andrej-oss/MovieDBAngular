import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './components/app-component/app.component';
import {HttpClientModule} from '@angular/common/http';
import {MoviePageComponent} from './components/movie-page/movie-page.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './logic-store/reducers/movies.reduser';
import {MoviePostComponent} from './components/movie-post/movie-post.component';
import {GenresService} from './services/genres.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './moduls/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SortMoviesComponent} from './components/sort-movies/sort-movies.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {StarRatingConfigService, StarRatingModule} from 'angular-star-rating';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailsService} from './services/movie-details.service';
import {TrailerService} from './services/trailer.service';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {ActorsService} from './services/actors.service';
import {ActorsComponent} from './components/actors/actors.component';
import {CommentsService} from './services/comments.service';
import {CommentComponent} from './components/comment/comment.component';
import {ActorPageComponent} from './components/actor-page/actor-page.component';
import {ActorBiographyService} from './services/actor-biography.service';
import {ActorMoviesService} from './services/actor-movies.service';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {CrewComponent} from './components/crew/crew.component';
import {TvShowComponent} from './components/tv-show/tv-show.component';
import {ShowsService} from './services/shows.service';
import {TvShowPostComponent} from './components/tv-show-post/tv-show-post.component';
import {TvShowSortComponent} from './components/tv-show-sort/tv-show-sort.component';
import {TvShowDetailsComponent} from './components/tv-show-details/tv-show-details.component';
import {TvShowDetailsService} from './services/tv-show-details.service';
import {TvShowCreditsService} from './services/tv-show-credits.service';
import {TvShowTrailersService} from './services/tv-show-trailers.service';
import {TvShowCommentsService} from './services/tv-show-comments.service';
import {SearchMovieService} from './services/search-movie.service';
import {TvShowSearchService} from './services/tv-show-search.service';
import {TvShowPaginatorComponent} from './components/tv-show-paginator(not used not deleted)/tv-show-paginator.component';
import {DataThemeService} from './services/data-theme.service';
import {ActorPostComponent} from './components/actor-post/actor-post.component';
import {ActorsPostService} from './services/actors-post.service';
import {FooterComponent} from './components/footer/footer.component';
import {TvShowSeasonService} from './services/tv-show-season.service';
import {TvShowSeasonComponent} from './components/tv-show-season/tv-show-season.component';
import {RouterCheckService} from './services/router-check.service';
import {ActorsPageComponent} from './components/actors-page/actors-page.component';
import {ActorsSearchService} from './services/actors-search.service';
import {MoviesMultiSearchService} from './services/movies-multisearch.service';
import {HomeComponent} from './components/home/home.component';
import {TvShowEpisodeService} from './services/tv-show-episode.service';
import {MoviesTopService} from './services/movies-top.service';
import {TvShowTopService} from './services/tv-show-top.service';
import {TvShowEpisodeComponent} from './components/tv-show-episode/tv-show-episode.component';
import {TvEpisodeTrailerService} from './services/tv-episode-trailer.service';
import {TvShowEpisodeCreditsService} from './services/tv-show-episode-credits.service';
import {routes} from './moduls/router.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviePostComponent,
    MoviePageComponent,
    SortMoviesComponent,
    MovieDetailsComponent,
    ActorsComponent,
    CommentComponent,
    ActorPageComponent,
    PaginatorComponent,
    StarRatingComponent,
    CrewComponent,
    TvShowComponent,
    TvShowPostComponent,
    TvShowSortComponent,
    TvShowDetailsComponent,
    TvShowPaginatorComponent,
    ActorPostComponent,
    FooterComponent,
    TvShowSeasonComponent,
    ActorsPageComponent,
    HomeComponent,
    TvShowEpisodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NoopAnimationsModule,
    StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    MaterialModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    RouterModule.forRoot(routes),
    NgbModule,
    // EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [GenresService, SearchMovieService, TvShowSearchService, DataThemeService, ActorsPostService, TvShowSeasonService,
    StarRatingConfigService, MovieDetailsService, TrailerService, ActorsService, CommentsService, ActorBiographyService,
    ActorMoviesService, ShowsService, TvShowDetailsService, TvShowCreditsService, TvShowTrailersService, TvShowCommentsService,
    RouterCheckService, ActorsSearchService, MoviesMultiSearchService, TvShowEpisodeService, MoviesTopService, TvShowTopService,
    TvEpisodeTrailerService, TvShowEpisodeCreditsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
