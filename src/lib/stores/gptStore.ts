import { writable } from 'svelte/store';
import { gptInfos } from '../../content/gpts';
import type { GPTInfoType } from '../../types/gpt';

export const gptStore = writable<GPTInfoType[]>(gptInfos);
