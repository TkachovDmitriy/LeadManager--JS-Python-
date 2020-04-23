import { combineReducers } from 'redux'
import leads from './leads.js'
import errors from './erors.js'
import message from './messages.js'
import auth  from './auth.js'

export default combineReducers({
    leads,
    errors,
    message,
    auth
})
