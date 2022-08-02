export interface NoggleProps {
	static?: boolean;
	eyeDirection?: 'forward' | 'forwards' | 'backward' | 'backwards';
	animation?: 'rainbow';
	eyes?: string[];
	restrictColors?: boolean;
	multicolor?: boolean;
	// temple?: 'left' | 'right' | 'none';
}

export type FrameType = 'normal' | 'thick';

export interface ExtraPart {
	glasses: number;
	path: string;
	color: string;
}

export interface Noggle {
	frameType: FrameType;
	colors: NoggleColors;
	scale: ScaleData;
	extraParts?: ExtraPart[];
}

export interface NoggleConfigFile {
	glasses: NoggleData[];
	scales: Scales;
}

export interface NoggleData {
	id: number;
	filename: string;
	data: string;
	colors: NoggleColors;
	hasThickFrames?: boolean;
}

export interface NoggleColors {
	frames: string[];
	eyes: string[];
}

export interface Scales {
	fill: ScaleData;
	static: ScaleData;
}

export interface ScaleData {
	dimensions: {
		width: number;
		height: number;
	};
	parts: {
		normal: string[];
		thick: string[];
	};
	extraParts: ExtraPart[];
}

export const NamedNoggles = [
	'hip-rose',
	'black-eyes-red',
	'black-rgb',
	'black',
	'blue-med-saturated',
	'blue',
	'frog-green',
	'fullblack',
	'green-blue-multi',
	'grey-light',
	'guava',
	'honey',
	'magenta',
	'orange',
	'pink-purple-multi',
	'red',
	'smoke',
	'teal',
	'watermelon',
	'yellow-orange-multi',
	'yellow-saturated'
] as const;
