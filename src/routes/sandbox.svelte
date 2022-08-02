<script>
	import { onMount } from 'svelte';
	import opts from './_components/noggle.config.ts';
	const { palette } = opts;
	import { timeline, animate } from 'motion';
	import { interpolate } from 'flubber';
	import { Noun } from '@cloudnouns/kit';

	export let fixed = false;
	export let glasses;
	export let customColor = '#c1c1c1';
	export let flipEyes = false;

	const position = fixed ? opts.fixed : opts.box;
	const { viewBox, frames, left, right } = position;
	const frameColor = glasses ? palette[glasses] : null;
	const noun = new Noun({ traits: [9000, 13, 100, 233, 9000] });

	let eyeColors = [
		['#fff', '#000'],
		['#fff', '#000']
	];

	if (flipEyes) {
		eyeColors[0].reverse();
		eyeColors[1].reverse();
	}

	const paths = {
		open: {
			left: ['M131 119H109V161H131V119Z', 'M151 119H130V161H151V119Z'],
			right: ['M201 119H179V161H201V119Z', 'M221 119H200V161H221V119Z']
		},
		squint: {
			left: ['M131 140H109V150H131V140Z', 'M151 140H130V150H151V140Z'],
			right: ['M201 140H179V150H201V140Z', 'M221 140H200V150H221V140Z']
		},
		closed: {
			left: ['M131 140H109V141H131V140Z', 'M151 140H130V141H151V140Z'],
			right: ['M201 140H179V141H201V140Z', 'M221 140H200V141H221V140Z']
		}
	};

	const startAnimation = () => {
		const opts = { repeat: Infinity };

		const sequence = [
			// left eye
			['#lblack', { d: `path('${paths.squint.left[1]}')` }, { duration: 0.22, delay: 2 }],
			['#lblack', { opacity: 0 }, { duration: 0.01, at: '-0.12' }],
			['#lblack', { opacity: 100 }, { delay: 0.28 }],
			['#lblack', { d: `path('${paths.open.left[1]}')` }, { duration: 0.4, at: '-0.45' }],
			['#lwhite', { d: `path('${paths.squint.left[0]}')` }, { duration: 0.22, at: 2 }],
			['#lwhite', { opacity: 0 }, { duration: 0.01, at: '-0.12' }],
			['#lwhite', { opacity: 100 }, { delay: 0.28 }],
			['#lwhite', { d: `path('${paths.open.left[0]}')` }, { duration: 0.4, at: '-0.45' }],
			['#lblack', { fill: '#fff' }, { delay: 5, duration: 0.01 }],
			['#lwhite', { fill: '#000' }, {}],
			// right eye
			['#rblack', { d: `path('${paths.squint.right[1]}')` }, { duration: 0.22, at: 2 }],
			['#rblack', { opacity: 0 }, { duration: 0.01, at: '-0.12' }],
			['#rblack', { opacity: 100 }, { delay: 0.28 }],
			['#rblack', { d: `path('${paths.open.right[1]}')` }, { duration: 0.4, at: '-0.45' }],
			['#rwhite', { d: `path('${paths.squint.right[0]}')` }, { duration: 0.22, at: 2 }],
			['#rwhite', { opacity: 0 }, { duration: 0.01, at: '-0.12' }],
			['#rwhite', { opacity: 100 }, { delay: 0.28 }],
			['#rwhite', { d: `path('${paths.open.right[0]}')` }, { duration: 0.4, at: '-0.45' }],
			['#rblack', { fill: '#fff' }, { delay: 5, duration: 0.01 }],
			['#rwhite', { fill: '#000' }, {}]
		];

		timeline(sequence, opts);
	};

	onMount(() => {
		startAnimation();
	});
</script>

<!-- <div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
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
	</div>
</div> -->

<div class="relative">
	<img src={noun.images.svg} alt="" />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		id="noggles-ktE87O"
		width="320"
		height="320"
		viewBox="0 0 320 320"
		fill="none"
		class="absolute top-0"
	>
		<!-- M201 140H179V141H201V140Z -->
		<path id="rwhite" d="M201 119H179V161H201V119Z" fill="#fff" />

		<!-- M131 140H109V141H131V140Z -->
		<path id="lwhite" d="M131 119H109V161H131V119Z" fill="#fff" />

		<!-- M221 140H200V141H221V140Z -->
		<path id="rblack" d="M221 119H200V161H221V119Z" fill="#000" />

		<!-- M151 140H130V141H151V140Z -->
		<path id="lblack" d="M151 119H130V161H151V119Z" fill="#000" />
		<path id="frames-ktE87O" d="M101 130H70V160H80V140H101V130Z" fill="red" />
		<path
			id="frames-ktE87O"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M230 110H170V130H159V140H170V170H230V110ZM220 160V120H180V160H220Z"
			fill="red"
		/>
		<path
			id="frames-ktE87O"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M100 110H160V170H100V110ZM110 160H150V120H110V160Z"
			fill="red"
		/>
		<style>
			@keyframes frames-fill {
				0% {
					fill: rgb(255, 0, 0, 1);
					animation-timing-function: linear;
				}

				10% {
					fill: rgb(255, 154, 0, 1);
					animation-timing-function: linear;
				}

				20% {
					fill: rgb(208, 222, 33, 1);
					animation-timing-function: linear;
				}

				30% {
					fill: rgb(79, 220, 74, 1);
					animation-timing-function: linear;
				}

				40% {
					fill: rgb(63, 218, 216, 1);
					animation-timing-function: linear;
				}

				50% {
					fill: rgb(47, 201, 226, 1);
					animation-timing-function: linear;
				}

				60% {
					fill: rgb(28, 127, 238, 1);
					animation-timing-function: linear;
				}

				70% {
					fill: rgb(95, 21, 242, 1);
					animation-timing-function: linear;
				}

				80% {
					fill: rgb(186, 12, 248, 1);
					animation-timing-function: linear;
				}

				90% {
					fill: rgb(251, 7, 217, 1);
					animation-timing-function: linear;
				}

				100% {
					fill: rgb(255, 0, 0, 1);
				}
			}

			#frames-ktE87O {
				animation: 10s linear 0s infinite both frames-fill;
			}
		</style>
	</svg>
</div>
