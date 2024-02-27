// import Pocketbase, { type RecordModel } from "pocketbase"
// import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
// import { derived, writable, } from "svelte/store";
// import { browser } from "$app/environment";
// import { validateUser, type User, type Conversation } from "./types";


// // Pocketbase

// export const pb = writable<Pocketbase | undefined>(undefined, (set) => {
//     if (!browser) {
//         return
//     }
//     const pbInstance = new Pocketbase(PUBLIC_POCKETBASE_URL)
//     pbInstance.authStore.loadFromCookie(document.cookie)
//     set(pbInstance)
// })


// export const userStore = derived<[typeof pb], User | undefined>(
//     [pb],
//     // @ts-ignore
//     ([pb], set: (arg0: User | undefined) => void) => {
//         if (!pb || !browser) {
//             set(undefined);

//             return;
//         }

//         const authModel = pb.authStore.model;

//         if (!validateUser(authModel)) {
//             set(undefined);

//             return;
//         }

//         const collectionUnsubscribe = pb
//             .collection("users")
//             .subscribe(authModel.id, (e: { action: string; record: any; }) => {
//                 if (e.action === "delete") {
//                     pb.authStore.clear();
//                     set(undefined);
//                 } else {
//                     pb.authStore.save(pb.authStore.token, e.record);

//                     const authModel = pb.authStore.model;

//                     if (!validateUser(authModel)) {
//                         set(undefined);
//                     } else {
//                         set(authModel);
//                     }
//                 }
//             });

//         return async () => {
//             (await collectionUnsubscribe)();
//         };
//     }
// );

// export const ConversationsStore = derived<[typeof pb], (Conversation & RecordModel)[] | undefined>(

//     [pb], ([pb], set: any, update: any) => {
//         if (!browser || !pb) {
//             set(undefined)
//             return
//         }

//         // Validate the Authmodel is Actually an User
//         const authModel = pb.authStore.model;
//         if (!validateUser(authModel)) {
//             set(undefined);
//             return;
//         }


//         // Todo Later
//     }
// )

// export function serializePOJO(obj: any) {
//     return structuredClone(obj)
// }