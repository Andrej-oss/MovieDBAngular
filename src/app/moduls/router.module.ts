import {Routes} from '@angular/router';
import {TvShowSeasonComponent} from '../components/tv-show-season/tv-show-season.component';
import {TvShowEpisodeComponent} from '../components/tv-show-episode/tv-show-episode.component';
import {TvShowDetailsComponent} from '../components/tv-show-details/tv-show-details.component';
import {TvShowComponent} from '../components/tv-show/tv-show.component';
import {RouterCheckService} from '../services/router-check.service';
import {MoviePageComponent} from '../components/movie-page/movie-page.component';
import {MovieDetailsComponent} from '../components/movie-details/movie-details.component';
import {ActorPageComponent} from '../components/actor-page/actor-page.component';
import {ActorsPageComponent} from '../components/actors-page/actors-page.component';

export const routes: Routes = [
  {path: 'tv_show/seasons/:id/:num', component: TvShowSeasonComponent},
  {path: 'tv_show/seasons/:id/:num/:episode', component: TvShowEpisodeComponent},
  {path: 'actor/tv/:pageId', component: TvShowDetailsComponent},
  {path: 'tv_shows/:sortOption/:id', component: TvShowComponent, canActivate: [RouterCheckService]},
  {path: 'tv_shows/:sortOption/:id/:pageId', component: TvShowDetailsComponent},
  {path: 'multiSearch/:lang/:reg/:year/:sort/:vote/:count', component: MoviePageComponent},
  {path: 'movies/:sortOption/:id', component: MoviePageComponent, canActivate: [RouterCheckService]},
  {path: 'movies/:sortOption/:id/:pageId', component: MovieDetailsComponent},
  {path: 'actor/:id', component: ActorPageComponent},
  {path: 'actor/:actorId/:id', component: MovieDetailsComponent},
  {path: 'actor/:sortOption/:id', component: ActorPageComponent},
  {path: 'actors/:id', component: ActorsPageComponent, canActivate: [RouterCheckService]},
  {path: 'actors/:search/:id', component: ActorsPageComponent},
  {path: 'actors/:pageId/:actorId/:id', component: MovieDetailsComponent},
  {path: 'crew/:id', component: ActorPageComponent},
  {path: 'crew/:id/:id', component: MovieDetailsComponent},
];
