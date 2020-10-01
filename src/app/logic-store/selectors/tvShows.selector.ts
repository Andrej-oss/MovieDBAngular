import {createFeatureSelector, createSelector} from '@ngrx/store';
import {tvShowNODE} from '../reducers/tvShows.reducer';
import {DefaultTvShowStore} from '../../models/defaultTvStore';


export const selectTvShowsFeatures = createFeatureSelector<DefaultTvShowStore>(tvShowNODE);

export const selectTvShow = createSelector(selectTvShowsFeatures, state => state.tvShows);
export const selectTvCurPage = createSelector(selectTvShowsFeatures, state => state.currentPage);
export const selectDetailsShow = createSelector(selectTvShowsFeatures, state => state.detailsShow);
export const selectActorTvShow = createSelector(selectTvShowsFeatures, state => state.actors);
export const selectCrewTvShow = createSelector(selectTvShowsFeatures, state => state.crew);
export const selectTrailersShow = createSelector(selectTvShowsFeatures, state => state.trailers);
export const selectCommentsShow = createSelector(selectTvShowsFeatures, state => state.comments);
export const selectTvSortOption = createSelector(selectTvShowsFeatures, state => state.selectTvOption);
export const selectTvShoeSeason = createSelector(selectTvShowsFeatures, state => state.season);
export const selectTvEpisode = createSelector(selectTvShowsFeatures, state => state.episode);
export const selectEpisodeTrailer = createSelector(selectTvShowsFeatures, state => state.episodeTrailers);
