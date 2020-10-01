import {createFeatureSelector, createSelector} from '@ngrx/store';
import {moviesNODE} from '../reducers/index.reducer';
import {DefaultStore} from '../../models/defaultStore';


export const selectMoviesFeatures = createFeatureSelector<DefaultStore>(moviesNODE);
debugger;
export const selectMovies = createSelector(selectMoviesFeatures, (state) => state.movies);
export const selectGenres = createSelector(selectMoviesFeatures, state => state.genres);
export const selectOption = createSelector(selectMoviesFeatures, state => state.sortOption);
export const selectDetails = createSelector(selectMoviesFeatures, state => state.detailsMovie);
export const selectTrailers = createSelector(selectMoviesFeatures, state => state.trailers);
export const selectActors = createSelector(selectMoviesFeatures, state => state.actors);
export const selectComments = createSelector(selectMoviesFeatures, state => state.comments);
export const selectBiography = createSelector(selectMoviesFeatures, state => state.biography);
export const selectMoviesActor = createSelector(selectMoviesFeatures, state => state.actorsMovies);
export const selectCurPage = createSelector(selectMoviesFeatures, state => state.currentPage);
export const selectCrew = createSelector(selectMoviesFeatures, state => state.crew);
export const selectActorsPost = createSelector(selectMoviesFeatures, state => state.actorsPost.actors);
export const selectCurPageActor = createSelector(selectMoviesFeatures, state => state.actorsPost.actorsCurrPage);
export const selectActorCurrPage = createSelector(selectMoviesFeatures, s1 => s1.actorsPost.actorsCurrPage);
export const selectActorLastPage = createSelector(selectMoviesFeatures, s1 => s1.actorsPost.actorsLastPage);
