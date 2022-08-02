import type { NoggleProps, NamedNoggles } from '../global';
import {
	buildNoggle,
	getRandomNoggleData,
	glasses,
	parseCustomColorProps,
	parseNoggleData
} from './utils';
import randomColor from 'randomcolor';

export class Noggles {
	// private constructor(props?: NoggleProps) {}

	static id(id: number, props?: NoggleProps): string {
		const data = glasses.find((g) => id === g.id);
		if (!data) throw new Error(`Invalid id: ${id}`);
		const noggle = parseNoggleData(data, props);
		return buildNoggle(noggle);
	}

	static color(color: typeof NamedNoggles[number], props?: NoggleProps): string {
		const data = glasses.find((g) => color === g.filename);
		if (!data) {
			throw new Error(
				`Invalid color. ${color} is not an official noggle color. Use Noggles.customColor() to customize noggle colors.`
			);
		}
		const noggle = parseNoggleData(data, props);
		return buildNoggle(noggle);
	}

	static customColor(color: string | string[], props?: NoggleProps): string {
		const noggle = parseCustomColorProps(color, props);
		return buildNoggle(noggle);
	}

	static random(props?: NoggleProps): string {
		if (props?.restrictColors) {
			const noggle = parseNoggleData(getRandomNoggleData(), props);
			return buildNoggle(noggle);
		} else if (props?.multicolor) {
			return Noggles.customColor([randomColor(), randomColor()], props);
		} else if (props?.multicolor === false) {
			return Noggles.customColor(randomColor(), props);
		} else {
			if (Math.round(Math.random())) return Noggles.customColor(randomColor(), props);
			return Noggles.customColor([randomColor(), randomColor()], props);
		}
	}

	static rainbow(props?: NoggleProps): string {
		if (!props) props = { animation: 'rainbow' };
		if (props && !props?.animation) props.animation = 'rainbow';
		const noggle = parseCustomColorProps('red', props);
		return buildNoggle(noggle, props.animation);
	}
}
