<script>
	import { Noun } from '@cloudnouns/kit';
	import { Noggles } from '$lib/index';

	let noun = new Noun({ traits: { glasses: 'n' } });

	// const n1 = Noggles.id(1, { static: true, eyeDirection: 'backwards' });
	// const n1 = Noggles.random({ static: true });
	// const n1 = Noggles.color('red', { static: true });
	const n1 = Noggles.rainbow({ static: true });
	// const n1 = Noggles.customColor(['pink', 'orange'], {
	// 	// eyes: ['yellow', 'teal']
	// 	// eyeDirection: 'backwards',
	// 	// static: true
	// });
	// const n1 = Noggles.customColor(['#dcff70', '#ffbd59'], {
	// 	static: true
	// eyeDirection: 'backwards'
	// eyes: ['yellow', 'green']
	// });
</script>

<div class="flex items-center justify-center min-h-screen bg-[#dcff70]">
	<div class="w-[500px] h-[500px] relative border-4 border-black bg-white">
		<div class="w-full absolute top-0 left-0 ">
			<img src={n1} alt="" class="w-full" />
		</div>
		<!-- <img src={noun.images.svg} alt="" class="w-full" /> -->
	</div>
</div>
