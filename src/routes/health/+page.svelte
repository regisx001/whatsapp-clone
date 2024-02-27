<script lang="ts">
	// import { pocketbase, serializePOJO } from '$lib';
	import { onMount } from 'svelte';
	let health: any = '';
	onMount(async () => {
		// health = serializePOJO(await pocketbase.lang);
	});
</script>

<h1>{health}</h1>
