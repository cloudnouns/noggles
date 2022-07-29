import type {
	CustomColorNoggleProps,
	NoggleColors,
	NoggleConfigFile,
	NoggleData,
	PositionData,
	NoggleProps
} from '$lib/global';
import ImageData from './image-data.json';
import validateColor from 'validate-color';

const Config: NoggleConfigFile = ImageData;
export const { glasses, positions } = Config;

export const buildNoggle = (
	colors: NoggleColors,
	position: PositionData = positions.default
): string => {
	const { frames, eyes } = colors;
	const { width, height, temple, left, right } = position;
	let eyeData;

	if (eyes) {
		eyeData = `
		<path d="${left.eye[0]}" fill="${eyes[0]}"/>
		<path d="${left.eye[1]}" fill="${eyes[1]}"/>
		<path d="${right.eye[0]}" fill="${eyes[0]}"/>
		<path d="${right.eye[1]}" fill="${eyes[1]}"/>
		`;
	}

	const svg = `
	<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
	<path d="${temple}" fill="${frames[1] || frames[0]}"/>
	${eyeData ? eyeData : ''}
	<path fill-rule="evenodd" clip-rule="evenodd" d="${left.frame}" fill="${frames[0]}"/>
	<path fill-rule="evenodd" clip-rule="evenodd" d="${right.frame}" fill="${frames[1] || frames[0]}"/>
	</svg>
	`;

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

export const parseCustomColorProps = (props: string[] | CustomColorNoggleProps) => {
	if (Array.isArray(props)) props = { frames: props };

	const { frames, eyes } = props;
	let colors: NoggleColors;

	if (!frames) {
		throw new Error('Invalid Frames. Frame color required when using Noggles.customColor().');
	}

	validateColors(frames);
	if (Array.isArray(frames)) {
		colors = { frames: frames.slice(0, 2), eyes };
	} else {
		colors = { frames: [frames], eyes };
	}

	if (eyes) {
		if (!Array.isArray(eyes)) {
			throw new Error('Invalid Eyes. Must be an array with two valid colors.');
		}
		validateColors(eyes);
	} else {
		colors.eyes = ['#fff', '#000'];
	}

	return parseNoggleData(colors, props);
};

export const parseNoggleData = (colors: NoggleColors, props?: NoggleProps) => {
	const position = props?.static ? positions.static : positions.default;
	if (props?.eyeDirection) {
		if (['backward', 'backwards'].includes(props?.eyeDirection)) {
			colors.eyes?.reverse();
		}
	}
	return { colors, position };
};
