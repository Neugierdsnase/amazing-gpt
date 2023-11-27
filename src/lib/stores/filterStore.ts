import { writable } from 'svelte/store';
import type { FilterType } from '../../types/filter';

const filterStoreWritable = writable<FilterType>({
  author: '',
  query: '',
  tags: [],
  sort: 'added',
  desc: true
});

const handleTagClick = (tag: string) => {
  filterStoreWritable.update((store) => {
    if (store.tags.includes(tag)) {
      store.tags = store.tags.filter((t) => t !== tag);
    } else {
      store.tags.push(tag);
    }
    return store;
  });
};

export const filterStore = {
  ...filterStoreWritable,
  handleTagClick
};
