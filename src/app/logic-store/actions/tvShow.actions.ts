import {Action} from '@ngrx/store';
import {TvShows} from '../../models/tvShow';
import {ShowDetails} from '../../models/ShowDetails';
import {ActorsCrewMovie} from '../../models/actorsCrewMovie';
import {Trailers} from '../../models/trailers';
import {Review, Reviews} from '../../models/review';
import {TvShowEpisode, TvShowSeason} from '../../models/tvShowSeason';


export enum TvShowActions {
  loadedTvShows = '[TV SHOWS] loaded',
  loadedTvShowDetails = '[TV SHOWS] details loaded',
  loadedTvShowsCredits = '[TV SHOWS] credits loaded',
  loadedTvShowVideos = '[TV SHOW] videos loaded',
  loadedTvShowComments = '[TV SHOW] comments loaded',
  loadedTvShowSearch = '[TV SHOW] search show loaded',
  loadedTvShowSeason = '[TV SHOW] season loaded',
  loadedTvShowEpisode = '[TV SHOW] episode loaded',
  loadedTvShowTrailerEpisode = '[TRAILER] episode loaded',
  loadedTvShowEpisodeCredit = '[TV SHOW] credits loaded',
}

export class TvShowsLoaded implements Action{
  readonly type = TvShowActions.loadedTvShows;

  constructor(public payload: [TvShows, string]) {
  }
}
export class TvShowDetailLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowDetails;

  constructor(public payload: ShowDetails[]) {
  }
}
export class TvShowCreditsLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowsCredits;

  constructor(public payload: ActorsCrewMovie) {
  }
}
export class TvShowVideosLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowVideos;

  constructor(public payload: Trailers) {
  }
}
export class TvShowCommentsLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowComments;

  constructor(public payload: Review[]) {
  }
}
export class TvShowSearchLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowSearch;

  constructor(public payload: [TvShows, string]) {
  }
}
export class TvShowSeasonLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowSeason;

  constructor(public payload: TvShowSeason[]) {
  }
}
export class TvShowEpisodeLoaded implements Action{
  readonly type = TvShowActions.loadedTvShowEpisode;

  constructor(public payload: TvShowEpisode[]) {
  }
}
export class TvShowEpisodeTrailer implements Action{
  readonly type = TvShowActions.loadedTvShowTrailerEpisode;

  constructor(public payload: Trailers) {
  }
}
export type TvShowActionsType = TvShowsLoaded |
  TvShowDetailLoaded |
  TvShowCreditsLoaded |
  TvShowVideosLoaded |
  TvShowCommentsLoaded |
  TvShowSearchLoaded |
  TvShowSeasonLoaded |
  TvShowEpisodeLoaded |
  TvShowEpisodeTrailer ;
