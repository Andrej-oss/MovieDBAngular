import {Option} from '../models/option';

export const accessToken = 'ef5bdbc3f746cdfea8ca9f753778d4d1';
export const sortingOption: Option[] = [{name: 'select by popularity(desc)', selectOption: 'popularity.desc'},
  {name: 'select by popularity(asc)', selectOption: 'popularity.asc'},
  {name: 'select by title(desc)', selectOption: 'original_title.desc'},
  {name: 'select by title(asc)', selectOption: 'original_title.asc'},
  {name: 'select by date(desc)', selectOption: 'release_date.desc'},
  {name: 'select by date(asc)', selectOption: 'release_date.asc'},
  {name: 'select by vote(desc)', selectOption: 'vote_count.desc'},
  {name: 'select by vote(asc)', selectOption: 'vote_count.asc'},
  {name: 'select by vote average(desc)', selectOption: 'vote_average.desc'},
  {name: 'select by vote average(asc)', selectOption: 'vote_average.asc'},
];
export const pages = [{id: 1}, { id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
export const sortingTvOption: Option[] = [{name: 'select by popularity(desc)', selectOption: 'popularity.desc'},
  {name: 'select by popularity(asc)', selectOption: 'popularity.asc'},
  {name: 'select by vote average(desc)', selectOption: 'vote_average.desc'},
  {name: 'select by vote average(asc)', selectOption: 'vote_average.asc'},
  {name: 'select by date(desc)', selectOption: 'first_air_date.desc'},
  {name: 'select by date(asc)', selectOption: 'first_air_date.asc'},
];
