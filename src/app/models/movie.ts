export interface Movie {
  poster_path: string;
  popularity: number;
  title: string;
  release_date: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
  original_language: string;
  backdrop_path: string;
  adult: boolean;
  video: boolean;
  id: number;
  vote_count: number;
  media_type?: string;
}
