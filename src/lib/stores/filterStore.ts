import { writable } from 'svelte/store';
import type { FilterType } from '../../types/filter';

export const filterStore = writable<FilterType>({
  author: '',
  query: '',
  tags: [],
  sort: 'added',
  desc: true
});
