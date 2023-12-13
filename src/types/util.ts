import type { Thing, WithContext } from 'schema-dts';

enum UuidEnum {
	_ = ''
}

export type UuidType = string & UuidEnum;
export type Schema = Thing | WithContext<Thing>;
