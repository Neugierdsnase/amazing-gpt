import { writable } from 'svelte/store';
import { gpts } from '../../content/gpts';
import type { GPTInfoType } from '../../types/gpt';

export const gptStore = writable<GPTInfoType[]>(gpts);
