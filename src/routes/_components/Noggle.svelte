<script>
	import { onMount } from 'svelte';
	import opts from '$lib/_pkg/noggle.config.ts';
	const { palette } = opts;
	import { animate } from 'motion';

	export let fixed = false;
	export let glasses;
	export let customColor = '#dcff70';
	export let flipEyes = false;

	const position = fixed ? opts.fixed : opts.box;
	const { viewBox, frames, left, right } = position;
	const frameColor = glasses ? palette[glasses] : 'white';

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
					'#ef4444',
					'#f97316',
					'#f59e0b',
					'#eab308',
					'#84cc16',
					'#22c55e',
					'#10b981',
					'#14b8a6',
					'#06b6d4',
					'#0ea5e9',
					'#3b82f6',
					'#6366f1',
					'#8b5cf6',
					'#a855f7',
					'#d946ef',
					'#ec4899',
					'#f43f5e'
				]
			},
			{ easing: 'linear', duration: 10, repeat: Infinity }
		);
	};

	onMount(() => {
		rainbowFrames();
		// 0-21 || '#0..0' || keywords ('rainbow') or ().rainbow()
		// nog = new Noggle('#dcff70');
	});
</script>

<svg id="noggle" xmlns="http://www.w3.org/2000/svg" {viewBox} fill="none">
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

<div class="flex justify-center">
	<button class="bg-white mt-10 px-3 py-1 text-lg border">Animate</button>
</div>
