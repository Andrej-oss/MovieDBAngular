
import {TvShowActions, TvShowActionsType} from '../actions/tvShow.actions';
import {InitialTvState} from '../../models/defaultTvStore';


export const tvShowNODE = 'tvShowsStore';

export const tvShowReducer = (state = InitialTvState, action: TvShowActionsType) => {
  switch (action.type) {
    case TvShowActions.loadedTvShows: {
      return {
        ...state,
        tvShows: action.payload[0].results,
        lastPage: action.payload[0].total_pages,
        currentPage: action.payload[0].page,
        isLoaded: true,
        selectTvOption: action.payload[1],
      };
    }
    case TvShowActions.loadedTvShowSearch:{
      return {
        ...state,
        tvShows: action.payload[0].results,
        lastPage: action.payload[0].total_pages,
        currentPage: action.payload[0].page,
        isLoaded: true,
        selectTvOption: action.payload[1],
      };
    }
    case TvShowActions.loadedTvShowDetails: {
      return {
        ...state,
        detailsShow: action.payload
      };
    }
    case TvShowActions.loadedTvShowsCredits: {
      debugger;
      return {
        ...state,
        actors: action.payload.cast,
        crew: action.payload.crew
      };
    }
    case TvShowActions.loadedTvShowVideos: {
      return {
        ...state,
        trailers: action.payload.results
      };
    }
    case TvShowActions.loadedTvShowComments: {
      return {
        ...state,
        comments: action.payload
      };
    }
    case TvShowActions.loadedTvShowSeason: {
      return {
        ...state,
        season: action.payload
      };
    }
    case TvShowActions.loadedTvShowEpisode: {
      return {
        ...state,
        episode: action.payload
      };
    }
    case TvShowActions.loadedTvShowTrailerEpisode: {
      return {
        ...state,
        episodeTrailers: action.payload.results
      };
    }
    default: return state;
  }
};
