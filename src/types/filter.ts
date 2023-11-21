type SortType = 'name' | 'added' | 'updated';

export type FilterType = {
  query: string;
  tags: string[];
  author: string;
  sort: SortType;
  desc: boolean;
};
