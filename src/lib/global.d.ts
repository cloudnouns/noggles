export interface NoggleProps {
	static?: boolean;
	eyeDirection?: 'forward' | 'forwards' | 'backward' | 'backwards';
	animation?: 'rainbow';
	eyes?: string[];
	// temple?: 'left' | 'right' | 'none';
}

export interface NoggleConfigFile {
	glasses: NoggleData[];
	positions: Positions;
}

export interface NoggleData {
	id: number;
	filename: string;
	data: string;
	colors: NoggleColors;
}

export interface NoggleColors {
	frames: string[];
	eyes?: string[];
}

export interface Positions {
	default: PositionData;
	static: PositionData;
}

export interface PositionData {
	width: number;
	height: number;
	temple: string;
	left: {
		eye: string[];
		frame: string;
	};
	right: {
		eye: string[];
		frame: string;
	};
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
