<script>
	import opts from '$lib/noggle.config.ts';
	const { palette } = opts;
	import { animate } from 'motion';

	export let fixed = false;
	export let glasses;
	export let customColor = '#e8705b';
	export let flipEyes = false;

	const position = fixed ? opts.fixed : opts.box;
	const { viewBox, frames, left, right } = position;
	const frameColor = glasses ? palette[glasses] : null;

	let eyeColors = [
		['#fff', '#000'],
		['#fff', '#000']
	];

	if (flipEyes) {
		eyeColors[0].reverse();
		eyeColors[1].reverse();
	}

	const blink = () => {};
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} fill="none">
	<path id="le0" fill-rule="evenodd" clip-rule="evenodd" d={left.white} fill={eyeColors[0][0]} />
	<path id="le1" fill-rule="evenodd" clip-rule="evenodd" d={left.pupil} fill={eyeColors[0][1]} />
	<path id="re0" fill-rule="evenodd" clip-rule="evenodd" d={right.white} fill={eyeColors[1][0]} />
	<path id="re1" fill-rule="evenodd" clip-rule="evenodd" d={right.pupil} fill={eyeColors[1][1]} />
	<path
		id="frames"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d={frames}
		fill={frameColor || customColor}
	/>
</svg>
