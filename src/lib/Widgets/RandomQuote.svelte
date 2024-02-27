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
	<blockquote class="space-y-2">
		<p class="text-lg">
			&ldquo;{quote.content}!&rdquo;
		</p>
		<footer class="text-sm">{quote.author}</footer>
	</blockquote>
{/if}
