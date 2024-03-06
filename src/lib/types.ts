/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Conversations = "Conversations",
	Messages = "messages",
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

export type ConversationsRecord<Tadmins = unknown, Tmembers = unknown> = {
	admins: null | Tadmins
	members: null | Tmembers
	name: string
	picture?: string
}

export type MessagesRecord = {
	conversation_id: RecordIdString
	message?: string
	message_photo?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConversationsResponse<Tadmins = unknown, Tmembers = unknown, Texpand = unknown> = Required<ConversationsRecord<Tadmins, Tmembers>> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Conversations: ConversationsRecord
	messages: MessagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Conversations: ConversationsResponse
	messages: MessagesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Conversations'): RecordService<ConversationsResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
