// tslint:disable-next-line:no-empty-interface
import {Movie} from './movie';

export interface TvShow {
  poster_path: string;
  popularity: number;
  name: string;
  first_air_date: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
  original_language: string;
  backdrop_path: string;
  id: number;
  vote_count: number;
  origin_country: string[];
  media_type?: string;
}
export interface TvShows {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}
