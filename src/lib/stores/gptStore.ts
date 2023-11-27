import { writable } from 'svelte/store';
import type { GPTInfoType } from '../../types/gpt';

export const gptStore = writable<GPTInfoType[]>([]);
