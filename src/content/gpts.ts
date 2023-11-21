import type { GPTInfoType } from '../types/gpt';
import type { UuidType } from '../types/util';

export const gpts: GPTInfoType[] = [
  {
    id: 'gpt-1' as UuidType,
    name: 'GPT-1',
    description: 'GPT-1 is a transformer model trained on a large text corpus.',
    url: '',
    tags: ['GPT', 'Transformer', 'Language Model', 'OpenAI'],
    added: '2021-04-01',
    image: '',
    author: { name: 'OpenAI', url: '' },
    updated: '2021-04-01'
  }
];
