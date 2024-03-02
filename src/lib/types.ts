
import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export type User = {
    id: string
    email: string
    username: string
    photo?: string
}


export function validateUser(data: any): data is User {
    const idIsString = typeof data.id == "string"
    const emailIsString = typeof data.email == "string"
    const usernameIsString = typeof data.username == "string"

    return idIsString && emailIsString && usernameIsString
}



export type Message = {
    user_id: string
    id: string
    content: string
    contentType: "message" | "string"
    created: string
}


export type Conversation = {
    name: string
    picture?: string
    members: string[]
    admin: string[]
    messages: Message[]
    messages_photo?: string[]
}
/**
* This file was @generated using pocketbase-typegen
*/


export enum Collections {
    Conversations = "Conversations",
    Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
    id: RecordIdString
    created: IsoDateString
    updated: IsoDateString
    collectionId: string
    collectionName: Collections
    expand?: T
}

export type AuthSystemFields<T = never> = {
    email: string
    emailVisibility: boolean
    username: string
    verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ConversationsRecord<Tadmins = unknown, Tmembers = unknown, Tmessages = unknown> = {
    admins: null | Tadmins
    members: null | Tmembers
    message_photos?: string[]
    messages?: null | Tmessages
    name: string
    picture?: string
}

export type UsersRecord = {
    avatar?: string
    name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConversationsResponse<Tadmins = unknown, Tmembers = unknown, Tmessages = unknown, Texpand = unknown> = Required<ConversationsRecord<Tadmins, Tmembers, Tmessages>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
    Conversations: ConversationsRecord
    users: UsersRecord
}

export type CollectionResponses = {
    Conversations: ConversationsResponse
    users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
    collection(idOrName: 'Conversations'): RecordService<ConversationsResponse>
    collection(idOrName: 'users'): RecordService<UsersResponse>
}
