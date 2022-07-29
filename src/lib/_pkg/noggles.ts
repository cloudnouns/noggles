import type { NoggleProps, NamedNoggles } from '../global';
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
		if (!data) {
			throw new Error(
				`Invalid color. ${color} is not an official noggle color. Use Noggles.customColor() to customize noggle colors.`
			);
		}
		const { colors, position } = parseNoggleData(data.colors, props);
		return buildNoggle(colors, position);
	}

	static customColor(color: string | string[], props?: NoggleProps): string {
		const { colors, position } = parseCustomColorProps(color, props);
		return buildNoggle(colors, position);
	}

	static random(props?: NoggleProps): string {
		const { colors, position } = parseNoggleData(getRandomNoggleData().colors, props);
		return buildNoggle(colors, position);
	}

	static rainbow(props?: NoggleProps): string {
		if (!props) props = { animation: 'rainbow' };
		if (props && !props?.animation) props.animation = 'rainbow';
		const { colors, position } = parseCustomColorProps('red', props);
		return buildNoggle(colors, position, props.animation);
	}
}
