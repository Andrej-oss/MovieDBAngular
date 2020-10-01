import {Genre} from './genre';

export interface ShowDetails {
  backdrop_path: string;
  created_by: Created[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeAir;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  seasons: Seasons[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface Created {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
  episode_run_time: number[];
  first_air_date: string;
}

export interface LastEpisodeAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}
export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
