import {Injectable} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Store} from '@ngrx/store';
import {
  ActorLoaded,
  ActorsLoad, ActorsPostLoaded, ActorsPostSearchLoaded,
  CommentsLoaded,
  DetailsMoviesLoaded,
  GenresLoaded,
  MoviesActorLoaded, MovieSearchLoaded,
  MoviesLoaded, MoviesMultiSearchLoaded,
  TrailerLoad,
} from './movies.actions';
import {GenresService} from '../../services/genres.service';
import {MovieDetailsService} from '../../services/movie-details.service';
import {TrailerService} from '../../services/trailer.service';
import {ActorsService} from '../../services/actors.service';
import {CommentsService} from '../../services/comments.service';
import {ActorBiographyService} from '../../services/actor-biography.service';
import {ActorMoviesService} from '../../services/actor-movies.service';
import {ShowsService} from '../../services/shows.service';
import {
  TvShowCommentsLoaded,
  TvShowCreditsLoaded,
  TvShowDetailLoaded, TvShowEpisodeLoaded, TvShowEpisodeTrailer,
  TvShowSearchLoaded, TvShowSeasonLoaded,
  TvShowsLoaded,
  TvShowVideosLoaded
} from './tvShow.actions';
import {TvShowDetailsService} from '../../services/tv-show-details.service';
import {TvShowCreditsService} from '../../services/tv-show-credits.service';
import {TvShowTrailersService} from '../../services/tv-show-trailers.service';
import {TvShowCommentsService} from '../../services/tv-show-comments.service';
import {SearchMovieService} from '../../services/search-movie.service';
import {TvShowSearchService} from '../../services/tv-show-search.service';
import {ActorsPostService} from '../../services/actors-post.service';
import {TvShowSeasonService} from '../../services/tv-show-season.service';
import {ActorsSearchService} from '../../services/actors-search.service';
import {MoviesMultiSearchService} from '../../services/movies-multisearch.service';
import {DataThemeService} from '../../services/data-theme.service';
import {TvShowEpisodeService} from '../../services/tv-show-episode.service';
import {MoviesTopService} from '../../services/movies-top.service';
import {TvEpisodeTrailerService} from '../../services/tv-episode-trailer.service';
import {TvShowEpisodeCreditsService} from '../../services/tv-show-episode-credits.service';

@Injectable({
  providedIn: 'root'
})
export class ActionStoreService {

  constructor(private movieService: MoviesService,
              private store: Store,
              private genresService: GenresService,
              private movieDetailsService: MovieDetailsService,
              private trailerService: TrailerService,
              private actorsService: ActorsService,
              private commentService: CommentsService,
              private actorBiographyService: ActorBiographyService,
              private actorMoviesService: ActorMoviesService,
              private actorsPostService: ActorsPostService,
              private actorsSearchService: ActorsSearchService,
              private searchMovieService: SearchMovieService,
              private multiSearchService: MoviesMultiSearchService,
              private moviesTopService: MoviesTopService,
              private showsService: ShowsService,
              private tvShowDetailsService: TvShowDetailsService,
              private tvShowCreditsService: TvShowCreditsService,
              private tvShowTrailersService: TvShowTrailersService,
              private tvShowCommentsService: TvShowCommentsService,
              private tvShowSearchService: TvShowSearchService,
              private tvShowSeasonService: TvShowSeasonService,
              private dataThemeService: DataThemeService,
              private tvShowEpisodeService: TvShowEpisodeService,
              private tvEpisodeTrailerService: TvEpisodeTrailerService,
              private tvShowEpisodeCreditsService: TvShowEpisodeCreditsService) {
  }

  getMovies(selectOption: string, id: number): | {} {
    return this.movieService.getMovies(selectOption, id)
      .subscribe(data => {
        debugger;
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.isMovieLoading = true;
        this.dataThemeService.data.value.language = '';
        return this.store.dispatch(new MoviesLoaded([data, selectOption]));
      });
  }

  getGenres(): | {} {
    return this.genresService.getGenres()
      .subscribe(data => {
        // @ts-ignore
        return this.store.dispatch(new GenresLoaded(data.genres));
      });
  }

  getDetailsMovie(id: number, lang: string): | {} {
    debugger;
    return this.movieDetailsService.getMovieDetails(id, lang)
      .subscribe(data => {
        this.dataThemeService.data.value.isMovieDetailsLoading = true;
        debugger;
        return this.store.dispatch(new DetailsMoviesLoaded([data]));
      });
  }

  getTrailers(id: number, lang: string): | {} {
    return this.trailerService.getTrailers(id, lang)
      .subscribe(data => {
        return this.store.dispatch(new TrailerLoad(data.results));
      });
  }

  getActors(id: number): | {} {
    return this.actorsService.getActors(id)
      .subscribe(data => {
        return this.store.dispatch(new ActorsLoad(data));
      });
  }

  getCommentsMovie(id: number, lang: string): | {} {
    return this.commentService.getComments(id, lang)
      .subscribe(data => this.store.dispatch(new CommentsLoaded(data.results)));
  }

  getActorBiographyById(id: number, lang: string): | {} {
    return this.actorBiographyService.getActorBiography(id, lang)
      .subscribe(data => this.store.dispatch(new ActorLoaded([data])));
    debugger;
  }

  getSearchActors(search: string, id: number, lang: string): | {} {
    return this.actorsSearchService.getActorsSearch(search, id, lang)
      .subscribe(data => {
        debugger;
        this.dataThemeService.data.value.isActorLoading = true;
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.actorSearch = search;
        return this.store.dispatch(new ActorsPostSearchLoaded(data));
      });
  }

  getMoviesByActor(id: number, lang: string): | {} {
    return this.actorMoviesService.getMoviesActor(id, lang)
      .subscribe(data => {
        this.dataThemeService.data.value.isActorsMoviesLoading = true;
        return this.store.dispatch(new MoviesActorLoaded(data.cast));
      });
  }

  getMoviesSearch(search: string, id: number): | {} {
    return this.searchMovieService.getSearchMovies(search, id)
      .subscribe(data => {
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.isMovieLoading = true;
        return this.store.dispatch(new MovieSearchLoaded([data, search]));
      });
  }

  getMultiSearch(leng: string, reg: string, sort: string, id: number, year: number, count: number, vote: number): | {} {
    return this.multiSearchService.getMultiSearchMovies(leng, reg, sort, id, year, count, vote)
      .subscribe(data => {
        this.dataThemeService.data.value.isMovieLoading = true;
        this.dataThemeService.data.value.language = leng;
        this.dataThemeService.data.value.region = reg;
        this.dataThemeService.data.value.year = year;
        this.dataThemeService.data.value.vote = vote;
        this.dataThemeService.data.value.count = count;
        this.dataThemeService.data.value.lastPage = data.total_pages;
        return this.store.dispatch(new MoviesMultiSearchLoaded([data, sort]));
      });
  }

  getTvShows(sort: string, id: number): | {} {
    return this.showsService.getTvShows(sort, id)
      .subscribe(data => {
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.isShowsLoading = true;
        return this.store.dispatch(new TvShowsLoaded([data, sort]));
      });
  }

  getTvShowsDetail(id: number): | {} {
    return this.tvShowDetailsService.getTvShowDetails(id)
      .subscribe(data => {
        this.dataThemeService.data.value.isShowDetailLoading = true;
        return this.store.dispatch(new TvShowDetailLoaded([data]));
      });
  }

  getTvShowCredit(id: number): | {} {
    return this.tvShowCreditsService.getCreditsShow(id)
      .subscribe(data => this.store.dispatch(new TvShowCreditsLoaded(data)));
  }

  getTvShowTrailers(id: number): | {} {
    return this.tvShowTrailersService.getTrailersShow(id)
      .subscribe(data => this.store.dispatch(new TvShowVideosLoaded(data)));
  }

  getShowsComment(id: number): | {} {
    return this.tvShowCommentsService.getCommentsTvShow(id)
      .subscribe(data => this.store.dispatch(new TvShowCommentsLoaded(data.results)));
  }

  getTvShowSearch(search: string, id: number): | {} {
    debugger;
    return this.tvShowSearchService.getSearchTvShow(search, id)
      .subscribe(data => {
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.isShowsLoading = true;
        return this.store.dispatch(new TvShowSearchLoaded([data, search]));
      });
  }

  getActorsPosts(id: number, lang: string): | {} {
    return this.actorsPostService.getActors(id, lang)
      .subscribe(data => {
        this.dataThemeService.data.value.lastPage = data.total_pages;
        this.dataThemeService.data.value.isActorLoading = true;
        return this.store.dispatch(new ActorsPostLoaded(data));
      });
  }

  getSeasonTvShow(id: number, num: number): | {} {
    return this.tvShowSeasonService.getTvEpisode(id, num)
      .subscribe(data => {
        this.dataThemeService.data.value.isTvSeasonsLoading = true;
        return this.store.dispatch(new TvShowSeasonLoaded([data]));
      });
  }

  EpisodeTvShow(id: number, season: number, episode: number): | {} {
    return this.tvShowEpisodeService.getEpisode(id, season, episode)
      .subscribe(data => {
        debugger;
        this.dataThemeService.data.value.isTvSeasonsLoading = true;
        return this.store.dispatch(new TvShowEpisodeLoaded([data]));
      });
  }

  getTrailerEpisode(tvId: number, season: number, id: number): | {} {
    return this.tvEpisodeTrailerService.getEpisodeTrailer(tvId, season, id)
      .subscribe(data => this.store.dispatch(new TvShowEpisodeTrailer(data)));
  }

  getCreditsEpisodeTvShow(tvId: number, season: number, id: number): | {} {
    debugger;
    return this.tvShowEpisodeCreditsService.getCreditsEpisode(tvId, season, id)
      .subscribe(data => this.store.dispatch(new TvShowCreditsLoaded(data)));
  }
}
