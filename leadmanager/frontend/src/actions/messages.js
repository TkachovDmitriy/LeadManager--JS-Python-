import { CREATE_MESSAGE } from './types.js'

// Create Messages
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload:msg
    }
}
