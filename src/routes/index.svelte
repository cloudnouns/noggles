<script>
	import { Noun } from '@cloudnouns/kit';
	import { Noggles } from '$lib/index';

	let noun = new Noun({ traits: { glasses: 'n' } });

	const n1 = Noggles.random();
	// const noggle = Noggle.random().animate()
</script>

<div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
	<div class="w-[500px] h-[500px] relative border-4 border-black bg-white">
		<div class="absolute top-0 left-0 w-full">
			<img src={n1} alt="" class="w-full" />
		</div>
		<!-- <img src={noun.images.svg} alt="" class="w-full" /> -->
	</div>
</div>
