<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	let quote: any = undefined;

	onMount(async () => {
		ready = false;
		await fetch('https://api.quotable.io/random').then(async (value) => {
			quote = await value.json();
			ready = true;
		});
	});
</script>

{#if ready}
	<blockquote class="mt-6 space-y-2 border-l-2 pl-6 italic">
		<p class="text-lg">
			&ldquo;{quote.content}!&rdquo;
		</p>
		<footer class="text-sm">{quote.author}</footer>
	</blockquote>
{/if}
