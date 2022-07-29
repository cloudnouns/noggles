<script>
	import { Noun } from '@cloudnouns/kit';
	import { Noggles } from '$lib/index';
	import Noggle2 from './_components/Noggle.svelte';

	let noun = new Noun({ traits: { glasses: 'n' } });

	// const n1 = Noggles.color('red');
	// const n1 = Noggles.customColor({
	// 	frames: ['pink', 'orange'],
	// eyes: ['yellow', 'teal'],
	// eyeDirection: 'backwards',
	// 	static: true
	// });
	const n1 = Noggles.customColor(['red', 'pink']);
	console.log(n1);
</script>

<div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
	<div class="w-[500px] h-[500px] relative border-4 border-black bg-white">
		<div class="w-full absolute top-0 left-0 ">
			<!-- <Noggle2 fixed glasses={noun.seed.glasses} /> -->
			<img src={n1} alt="" class="w-full" />
		</div>
		<!-- <img src={noun.images.svg} alt="" class="w-full" /> -->
	</div>
</div>
