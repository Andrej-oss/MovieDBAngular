import {Action} from '@ngrx/store';
import {Movies} from '../../models/movies';
import {Genre} from '../../models/genre';
import {DetailMovie} from '../../models/detailMovie';
import {Trailer} from '../../models/trailer';
import {Actor, ActorsCrewMovie} from '../../models/actorsCrewMovie';
import {Review} from '../../models/review';
import {ActorBiography} from '../../models/actorBiography';
import {Cast} from '../../models/filmography';
import {Actors} from '../../models/actor';


export enum MoviesActionsTypes {
  loadMovies = '[MOVIES] loaded',
  loadedGenres = '[GENRES] loaded',
  loadedDetailsMovie = '[MOVIES] Details Loaded',
  loadedTrailers = '[TRAILER] loaded',
  loadedActors = '[ACTORS] loaded',
  loadedComments = '[COMMENTS] loaded',
  loadedActor = '[ACTOR] loaded',
  loadedMoviesActors = '[MOVIES] actor loaded',
  loadedSearchMovie = '[MOVIES] search loaded',
  loadedActorPost = '[ACTORS] posts loaded',
  loadedActorPostSearch = '[ACTORS] search loaded',
  loadedMultiSearchMovie = '[MOVIES] multiSearch loaded',
  loadedTopRatingMovies = '[MOVIES] top rating loaded'
}

export class MoviesLoaded implements Action {
  readonly type = MoviesActionsTypes.loadMovies;

  constructor(public payload: [Movies, string]) {
  }
}

export class GenresLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedGenres;

  constructor(public payload: Genre[]) {
  }
}

export class DetailsMoviesLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedDetailsMovie;

  constructor(public payload: DetailMovie[]) {
  }
}

export class TrailerLoad implements Action {
  readonly type = MoviesActionsTypes.loadedTrailers;

  constructor(public payload: Trailer[]) {
  }
}

export class ActorsLoad implements Action {
  readonly type = MoviesActionsTypes.loadedActors;

  constructor(public payload: ActorsCrewMovie) {
  }
}

export class CommentsLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedComments;

  constructor(public  payload: Review[]) {
  }
}

export class ActorLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedActor;

  constructor(public payload: ActorBiography[]) {
  }
}

export class MoviesActorLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedMoviesActors;

  constructor(public payload: Cast[]) {
  }
}

export class MovieSearchLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedSearchMovie;

  constructor(public payload: [Movies, string]) {
  }
}

export class ActorsPostLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedActorPost;

  constructor(public payload: Actors) {
  }
}

export class ActorsPostSearchLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedActorPostSearch;

  constructor(public payload: Actors) {
  }
}

export class MoviesMultiSearchLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedMultiSearchMovie;

  constructor(public payload: [Movies, string]) {
  }
}

export class MoviesTopRatingLoaded implements Action {
  readonly type = MoviesActionsTypes.loadedTopRatingMovies;

  constructor(public payload: Movies) {
  }
}

export type MoviesActions = MoviesLoaded |
  GenresLoaded |
  DetailsMoviesLoaded |
  TrailerLoad |
  ActorsLoad |
  CommentsLoaded |
  ActorLoaded |
  MoviesActorLoaded |
  MovieSearchLoaded |
  ActorsPostLoaded |
  ActorsPostSearchLoaded |
  MoviesMultiSearchLoaded |
  MoviesTopRatingLoaded;
