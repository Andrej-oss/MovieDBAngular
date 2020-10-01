import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {moviesNODE, moviesReducer} from './index.reducer';

import {tvShowNODE, tvShowReducer} from './tvShows.reducer';

export interface State {
  [moviesNODE]: {};
  [tvShowNODE]: {};
}

export const reducers: ActionReducerMap<State> = {
  [moviesNODE]: moviesReducer,
  [tvShowNODE]: tvShowReducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


