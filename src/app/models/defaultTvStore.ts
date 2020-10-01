import {TvShow} from './tvShow';
import {ShowDetails} from './ShowDetails';
import {Actor, Crew} from './actorsCrewMovie';
import {Trailer} from './trailer';
import {Review} from './review';
import {TvShowEpisode, TvShowSeason} from './tvShowSeason';

export interface DefaultTvShowStore {
  tvShows: TvShow[];
  currentPage: number;
  detailsShow: ShowDetails[];
  actors: Actor[];
  crew: Crew[];
  trailers: Trailer[];
  comments: Review[];
  selectTvOption: string;
  season: TvShowSeason[];
  episode: TvShowEpisode[];
  episodeTrailers: Trailer[];
}

export const InitialTvState: DefaultTvShowStore = {
  tvShows: [],
  currentPage: 0,
  detailsShow: [],
  actors: [],
  crew: [],
  trailers: [],
  comments: [],
  selectTvOption: '',
  season: [],
  episode: [],
  episodeTrailers: [],
};
