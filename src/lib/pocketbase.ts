import { type TypedPocketBase } from "./types"
import Pocketbase from "pocketbase"
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";


export const pb = new Pocketbase(PUBLIC_POCKETBASE_URL) as TypedPocketBase;


export function updateArray(arr: [], e: any) {
    // @ts-ignore
    const index = conversations.items.findIndex((item) => item.id === e.record.id);
    // @ts-ignore
    arr.items = conversations.items.filter((item) => item.id !== e.record.id);
    // @ts-ignore
    arr.items = [
        // @ts-ignore
        ...arr.items.slice(0, index),
        e.record,
        // @ts-ignore
        ...arr.items.slice(index)
    ];
    return arr
}
