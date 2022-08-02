import type {
	FrameType,
	Noggle,
	NoggleColors,
	NoggleConfigFile,
	NoggleData,
	NoggleProps
} from '$lib/global';
import { animations } from './animations.js';
import { nanoid } from 'nanoid';
import ImageData from './image-data.json';
import validateColor from 'validate-color';

const Config: NoggleConfigFile = ImageData;
export const { glasses, scales } = Config;

export const buildNoggle = (noggleData: Noggle, animation?: NoggleProps['animation']): string => {
	const id = nanoid(6);
	const { colors, frameType, scale, extraParts } = noggleData;
	const { frames, eyes } = colors;
	const { dimensions, parts } = scale;
	const { width, height } = dimensions;
	const items = frameType === 'thick' ? parts.thick : parts.normal;

	let svg = `
		<svg id="noggles-${id}" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
		<path d="${items[0]}" fill="${eyes[0]}"/>
		<path d="${items[1]}" fill="${eyes[0]}"/>
		<path d="${items[2]}" fill="${eyes[1]}"/>
		<path d="${items[3]}" fill="${eyes[1]}"/>
		<path id="frames-${id}" d="${items[4]}" fill="${frames[1] || frames[0]}"/>
		<path id="frames-${id}" fill-rule="evenodd" clip-rule="evenodd" d="${items[5]}" fill="${
		frames[1] || frames[0]
	}"/>
	<path id="frames-${id}" fill-rule="evenodd" clip-rule="evenodd" d="${items[6]}" fill="${
		frames[0]
	}"/>
	`;

	if (extraParts && extraParts.length) {
		svg = extraParts.reduce((a, b) => a + `<path d="${b.path}" fill="${b.color}"/>`, svg);
	}

	if (animation) {
		const keyframes = animations[animation].replace('#PLACEHOLDER', `#frames-${id}`);
		const style = `<style>${keyframes}</style>`;
		svg += style;
	}

	svg += '</svg>';
	return getNoggleDataUrl(svg);
};

const getNoggleDataUrl = (svg: string): string => {
	if (typeof window === 'object') {
		return 'data:image/svg+xml;base64,' + btoa(svg);
	} else {
		return 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
	}
};

export const getNoggleNames = () => {
	return glasses.map((g) => g.filename);
};

export const getRandomNoggleData = (): NoggleData => {
	return glasses[Math.floor(Math.random() * glasses.length)];
};

export const validateColors = (colors: string | string[]): boolean => {
	if (Array.isArray(colors)) {
		const validations = colors.map((color) => {
			const isValid = validateColor(color);
			if (!isValid) {
				throw new Error(`Invalid color(s): ${color}`);
			}
			return isValid;
		});
		const outcome = validations.every((result) => result === true);
		if (outcome && colors.length > 2) {
			console.warn(
				`Only two colors are supported at this time. Using the first two (${colors[0]}, ${colors[1]}) and ignoring the others.`
			);
		}
		return outcome;
	}
	return validateColor(colors);
};

export const parseCustomColorProps = (color: string | string[], props?: NoggleProps) => {
	let colors: NoggleColors;
	let eyes: string[];

	if (!color || (typeof color !== 'string' && !Array.isArray(color))) {
		throw new Error(
			'Invalid Frames. Frame color(s) required with Noggles.customColor(). Include a string or  string[] with valid color strings as the first parameter.'
		);
	}

	if (props?.eyes) {
		eyes = props.eyes;
		if (!Array.isArray(eyes) || eyes.length < 2) {
			throw new Error('Invalid Eyes. Must be an array with two valid colors.');
		}
		validateColors(eyes);
		eyes = eyes.slice(0, 2);
	} else {
		eyes = ['#fff', '#000'];
	}

	validateColors(color);
	if (Array.isArray(color)) {
		colors = { frames: color.slice(0, 2), eyes };
	} else {
		colors = { frames: [color], eyes };
	}

	const noggleData: NoggleData = {
		id: -1,
		filename: 'custom',
		data: '',
		colors,
		hasThickFrames: false
	};

	return parseNoggleData(noggleData, props);
};

export const parseNoggleData = (data: NoggleData, props?: NoggleProps): Noggle => {
	const { colors, hasThickFrames } = data;
	const scale = props?.static ? scales.static : scales.fill;

	const frameType: FrameType = hasThickFrames ? 'thick' : 'normal';
	const extraParts = scale.extraParts.filter((g) => g.glasses === data.id);

	if (props?.eyeDirection) {
		if (['backward', 'backwards'].includes(props?.eyeDirection)) {
			colors.eyes?.reverse();
		}
	}

	const noggle: Noggle = { colors, frameType, scale, extraParts };
	return noggle;
};
