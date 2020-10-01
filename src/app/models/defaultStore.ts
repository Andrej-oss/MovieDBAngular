import {Movies} from './movies';
import {Movie} from './movie';
import {Genre} from './genre';
import {DetailMovie} from './detailMovie';
import {Trailer} from './trailer';
import {Actor, ActorsCrewMovie, Crew} from './actorsCrewMovie';
import {Review} from './review';
import {ActorBiography} from './actorBiography';
import {Cast} from './filmography';

export interface DefaultStore  {
  movies: Movie[];
  currentPage: number;
  genres: Genre[];
  sortOption: string;
  detailsMovie: DetailMovie[];
  trailers: Trailer[];
  actors: Actor[];
  crew: Crew[];
  comments: Review[];
  biography: ActorBiography[];
  actorsMovies: Cast[];
  actorsPost: {
    actors: Actor[];
    actorsCurrPage: number;
    actorsLastPage: number;
  };
}
// @ts-ignore
export const InitialState: DefaultStore = {
  movies: [],
  currentPage: 0,
  genres: [],
  sortOption: '',
  detailsMovie: [],
  trailers: [],
  actors: [],
  crew: [],
  comments: [],
  biography: [],
  actorsMovies: [],
  actorsPost: {
    actors: [],
    actorsCurrPage: 0,
    actorsLastPage: 0,
   },
};
