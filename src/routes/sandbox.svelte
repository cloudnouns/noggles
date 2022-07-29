<script>
	import { onMount } from 'svelte';
	import opts from './_components/noggle.config.ts';
	const { palette } = opts;
	import { animate } from 'motion';

	export let fixed = false;
	export let glasses;
	export let customColor = '#c1c1c1';
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

	const rainbowFrames = () => {
		animate(
			'#frames',
			{
				fill: [
					'rgb(255, 0, 0, 1)',
					'rgb(255, 154, 0, 1)',
					'rgb(208, 222, 33, 1)',
					'rgb(79, 220, 74, 1)',
					'rgb(63, 218, 216, 1)',
					'rgb(47, 201, 226, 1)',
					'rgb(28, 127, 238, 1)',
					'rgb(95, 21, 242, 1)',
					'rgb(186, 12, 248, 1)',
					'rgb(251, 7, 217, 1)',
					'rgb(255, 0, 0, 1)'
				]
			},
			{ easing: 'linear', duration: 10, repeat: Infinity }
		);
	};

	onMount(() => {
		rainbowFrames();
	});
</script>

<div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
	<div class="w-[500px] h-[500px] relative border-4 border-black bg-white">
		<div class="absolute top-0 left-0 w-full">
			<svg id="noggle" xmlns="http://www.w3.org/2000/svg" {viewBox} fill="none">
				<path
					id="le0"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={left.white}
					fill={eyeColors[0][0]}
				/>
				<path
					id="le1"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={left.pupil}
					fill={eyeColors[0][1]}
				/>
				<path
					id="re0"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={right.white}
					fill={eyeColors[1][0]}
				/>
				<path
					id="re1"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={right.pupil}
					fill={eyeColors[1][1]}
				/>
				<path
					id="frames"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={frames}
					fill={frameColor || customColor}
				/>
			</svg>
		</div>
		<!-- <img src={noun.images.svg} alt="" class="w-full" /> -->
	</div>
</div>
