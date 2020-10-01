import {Movie} from './movie';
import {TvShow} from './tvShow';

export interface Actor {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: Movie[] | TvShow[];
  name: string;
  popularity: number;
}
export interface Actors {
  page: number;
  results: Actor[];
  total_results: number;
  total_pages: number;
}
