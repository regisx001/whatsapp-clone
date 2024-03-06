<script lang="ts">
	import { page } from '$app/stores';
	import { pb, updateArray } from '$lib/pocketbase';

	let conversations = $state($page.data?.conversations);
	let conversationId = $derived(conversations.items[0].id);
	let messages = $state({});
	import { onDestroy } from 'svelte';

	$effect(() => {
		pb.collection('Conversations').subscribe('*', (e) => {
			if (e.action == 'delete') {
				// @ts-ignore
				conversations = conversations?.items.filter((item) => item.id !== e.record.id);
			} else if (e.action == 'update') {
				// @ts-ignore
				const index = conversations.items.findIndex((item) => item.id === e.record.id);
				// @ts-ignore
				conversations.items = conversations.items.filter((item) => item.id !== e.record.id);
				conversations.items = [
					...conversations.items.slice(0, index),
					e.record,
					...conversations.items.slice(index)
				];
			} else {
				conversations.items.push(e.record);
			}
		});

		pb.collection('messages')
			.getFullList({
				filter: `conversation_id='${conversationId}'`
			})
			.then((val) => {
				messages = structuredClone(val);
			});

		pb.collection('messages').subscribe('*', (e) => {
			if (e.action == 'delete') {
				if (e.record.conversation_id === conversationId) {
					// @ts-ignore
					messages = messages?.filter((item) => item.id !== e.record.id);
				}
				// console.log(e);
			} else if (e.action === 'update') {
				if (e.record.conversation_id === conversationId) {
					// @ts-ignore
					const index = messages.findIndex((item) => item.id === e.record.id);
					// @ts-ignore
					messages = messages.filter((item) => item.id !== e.record.id);
					// @ts-ignore
					messages = [...messages.slice(0, index), e.record, ...messages.slice(index)];
				}
			} else {
				if (e.record.conversation_id === conversationId) {
					// @ts-ignore
					messages?.push(e.record);
				}
			}
		});
	});

	onDestroy(() => {
		pb.collection('Conversations').unsubscribe();
		pb.collection('messages').unsubscribe();
	});
</script>

<pre>
	{JSON.stringify(conversationId, null, 2)}
</pre>

<pre>
	{JSON.stringify(messages, null, 2)}
</pre>
