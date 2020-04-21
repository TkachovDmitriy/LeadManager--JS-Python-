import axios from 'axios'
import { createMessage, returnErrors } from './messages.js'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types.js'

// GET_LEADS
export const get_leads = () => (dispatch, getState) => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })    
        }).catch(err => dispatch (returnErrors(err.response.data, err.response.status)))
}

// DELETE_LEAD
export const delete_lead = (id) => (dispatch) => {
    axios.delete(`api/leads/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Delete' }))
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })    
        }).catch(err => console.log(err))
}

// ADD_LEAD
export const add_lead = (lead) => (dispatch) => {
    axios.post('/api/leads/', lead)
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })    
        }).catch(err => dispatch (returnErrors(err.response.data, err.response.status)) )
}
