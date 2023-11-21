import type { UuidType } from './util';

type AuthorType = {
  name: string;
  url: string;
};

export type GPTInfoType = {
  name: string;
  author: AuthorType;
  description: string;
  tags: string[];
  added: string;
  updated: string;
  id: UuidType;
  url: string;
  image: string;
};
