import {Genre} from './genre';
import {PropuctionCompany} from './propuctionCompany';
import {ProductionCountry} from './productionCountry';

export interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string;
production_companies: PropuctionCompany[];
production_countries: ProductionCountry[];
release_date: string;
revenue: number;
runtime: number;
tagline: string;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
}
