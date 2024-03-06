import type { PageLoad } from "./$types";
import { pb } from '$lib/pocketbase';
import { browser } from "$app/environment";

export const load: PageLoad = async () => {
    if (!browser) {

    }
    const conversations = structuredClone(await pb.collection('Conversations').getList(1, 50));

    return {
        conversations,
    }
}


