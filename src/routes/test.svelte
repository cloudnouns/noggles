<script>
	import { Noun, Images } from '@cloudnouns/kit';
	const { glasses } = Images.classic.traits;

	const nouns = glasses.map((g) => new Noun({ traits: [9000, 9000, 9000, 9000, g.id] }));
	console.log(nouns);
</script>

{#if nouns}
	{#each nouns as n, i}
		<div class="flex items-center ml-20">
			<p>{i}</p>
			<img src={n.images.svg} alt="" />
		</div>
	{/each}
{/if}
