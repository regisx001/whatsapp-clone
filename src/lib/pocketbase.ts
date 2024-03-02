import Pocketbase, { type RecordModel } from "pocketbase"
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import { derived, writable, } from "svelte/store";
import { browser } from "$app/environment";
import { validateUser, type User, type Conversation, type TypedPocketBase, type ConversationsRecord } from "./types";

const pb = new Pocketbase(PUBLIC_POCKETBASE_URL) as TypedPocketBase;


function createConversationStore() {
    const { set, subscribe, update } = writable({})

    if (!browser) {
        return
    }

    pb.collection("Conversations").getList(1, 50).then((val) => {
        console.log(structuredClone(val))
        set(val)
    })

    pb.collection("Conversations").subscribe("*", (e) => {
        if (e.action == "delete") {
            // Todo Later
        } else if (e.action == "update") {
            console.log("Update this record" + e.record.id)
        } else {
            // @ts-ignore
            update((val) => val.items = [...val.items, e.record])
        }
        // set(e)
    })

    return {
        subscribe,
        update,
        set,
        getConversations: () => {
            pb.collection("Conversations").getList(1, 50).then((e) => {
                set(e)
            })
        }
    }
}

export const conversationStore = createConversationStore()