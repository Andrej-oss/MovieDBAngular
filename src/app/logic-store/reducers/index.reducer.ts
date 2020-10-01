import {InitialState} from '../../models/defaultStore';
import {MoviesActions, MoviesActionsTypes} from '../actions/movies.actions';

export const moviesNODE = 'moviesStore';

export const moviesReducer = (state = InitialState, action: MoviesActions) => {
// tslint:disable-next-line:no-debugger
  debugger;
  switch (action.type) {
    case MoviesActionsTypes.loadMovies: {
      const {genres} = state;
      return {
        ...state,
        movies: action.payload[0].results,
        currentPage: action.payload[0].page,
        sortOption: action.payload[1],
      };
    }
    case MoviesActionsTypes.loadedGenres: {
      const {movies} = state;
      return {
        ...state,
        genres: action.payload
      };
    }
    case MoviesActionsTypes.loadedDetailsMovie: {
      const {actors, actorsMovies, comments, crew, genres, trailers} = state;
      return {
        ...state,
        detailsMovie: action.payload
      };
    }
    case MoviesActionsTypes.loadedTrailers: {
      const {actors, actorsMovies, comments, crew, genres, detailsMovie} = state;
      return {
        ...state,
        trailers: action.payload
      };
    }
    case MoviesActionsTypes.loadedActors: {
      return {
        ...state,
        actors: action.payload.cast,
        crew: action.payload.crew
      };
    }
    case MoviesActionsTypes.loadedComments: {
      return {
        ...state,
        comments: action.payload
      };
    }
    case MoviesActionsTypes.loadedActor: {
      return {
        ...state,
        biography: action.payload
      };
    }
    case MoviesActionsTypes.loadedMoviesActors: {
      return {
        ...state,
        actorsMovies: action.payload
      };
    }
    case MoviesActionsTypes.loadedSearchMovie: {
      return {
        ...state,
        movies: action.payload[0].results,
        currentPage: action.payload[0].page,
        sortOption: action.payload[1],
      };
    }
    case MoviesActionsTypes.loadedActorPost: {
      return {
        ...state,
        actorsPost: {
          actors: [...action.payload.results],
          actorsCurrPage: action.payload.page,
          actorsLastPage: action.payload.total_pages
        }
      };
    }
    case MoviesActionsTypes.loadedActorPostSearch: {
      const {actorsMovies, biography, comments, crew, trailers, actors} = state;
      return {
        ...state,
        actorsPost: {
          actors: [...action.payload.results],
          actorsCurrPage: action.payload.page,
          actorsLastPage: action.payload.total_pages
        }
      };
    }
    case MoviesActionsTypes.loadedMultiSearchMovie: {
      return {
        movies: action.payload[0].results,
        currentPage: action.payload[0].page,
        sortOption: action.payload[1],
      };
    }
    default:
      return state;
  }
};


