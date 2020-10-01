export interface TvShowSeason {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}

export interface TvShowEpisode {
  air_date: string;
  crew: Crew[];
  episode_number: number;
  guest_stars: Guests[];
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Crew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

export interface Episode {
  air_date: string;
  crew: Crew[];
  episode_number: number;
  guest_stars: Guests[];
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  show_id: number;
}

export interface Guests {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  gender: number;
  profile_path: string;
}
