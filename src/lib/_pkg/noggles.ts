import type { NoggleProps, CustomColorNoggleProps, NamedNoggles } from '../global';
import {
	buildNoggle,
	getRandomNoggleData,
	glasses,
	parseCustomColorProps,
	parseNoggleData
} from './utils';

export class Noggles {
	// private constructor(props?: NoggleProps) {}

	static id(id: number, props?: NoggleProps): string {
		const data = glasses.find((g) => id === g.id);
		if (!data) throw new Error(`Invalid id: ${id}`);
		const { colors, position } = parseNoggleData(data.colors, props);
		return buildNoggle(colors, position);
	}

	static color(color: typeof NamedNoggles[number], props?: NoggleProps): string {
		const data = glasses.find((g) => color === g.filename);
		if (!data) throw new Error(`Invalid color(s): ${color}`);
		const { colors, position } = parseNoggleData(data.colors, props);
		return buildNoggle(colors, position);
	}

	// todo: support separate props for string, string[]. remove custom noggle type
	static customColor(props: string | string[] | CustomColorNoggleProps): string {
		if (typeof props === 'string') props = { frames: props };
		const { colors, position } = parseCustomColorProps(props);
		return buildNoggle(colors, position);
	}

	static random(props?: NoggleProps): string {
		const { colors, position } = parseNoggleData(getRandomNoggleData().colors, props);
		return buildNoggle(colors, position);
	}

	// static rainbow(props?: NoggleProps): Noggles {
	// 	console.log('rainbow noggles!!!');
	// 	return new Noggles(props);
	// }
}
