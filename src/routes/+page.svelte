<script lang="ts">
	import { browser } from '$app/environment';
	import { conversationStore } from '$lib/pocketbase';

	let data = {};
	let rdata = {};
	import { onMount } from 'svelte';

	onMount(async () => {});
</script>

<pre>
	{JSON.stringify(structuredClone($conversationStore), null, 2)}
</pre>

<!-- <pre>

	{JSON.stringify(structuredClone(data), null, 2)}
</pre> -->
