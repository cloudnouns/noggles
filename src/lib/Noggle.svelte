<script>
	import opts from '$lib/noggle.config.ts';
	import { animate } from 'motion';

	export let fixed = false;
	export let frameColor = '#e8705b';
	export let flipEyes = false;

	const position = fixed ? opts.fixed : opts.box;
	const { viewBox, frames, leftEye, rightEye } = position;

	let leftEyeColors = ['#fff', '#000'];
	let rightEyeColors = ['#fff', '#000'];

	if (flipEyes) {
		leftEyeColors.reverse();
		rightEyeColors.reverse();
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} fill="none">
	<path fill-rule="evenodd" clip-rule="evenodd" d={leftEye.white} fill={leftEyeColors[0]} />
	<path fill-rule="evenodd" clip-rule="evenodd" d={leftEye.pupil} fill={leftEyeColors[1]} />
	<path fill-rule="evenodd" clip-rule="evenodd" d={rightEye.white} fill={rightEyeColors[0]} />
	<path fill-rule="evenodd" clip-rule="evenodd" d={rightEye.pupil} fill={rightEyeColors[1]} />
	<path fill-rule="evenodd" clip-rule="evenodd" d={frames} fill={frameColor} />
</svg>
