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