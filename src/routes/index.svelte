<script>
	import { Noun } from '@cloudnouns/kit';
	import Noggle from '$lib/Noggle.svelte';

	let noun = new Noun({ traits: { glasses: 'n' } });
	console.log(noun.seed.glasses);
</script>

<div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
	<div class="w-[500px] h-[500px] relative border-4 border-black">
		<div class="w-full absolute top-0 left-0">
			<Noggle fixed glasses={noun.seed.glasses} />
		</div>
		<img src={noun.images.svg} alt="" class="w-full" />
	</div>
</div>
