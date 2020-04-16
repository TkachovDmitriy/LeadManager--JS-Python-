import axios from 'axios'

import { GET_LEADS, DELETE_LEAD } from './types.js'

// GET_LEADS
export const get_leads = () => (dispatch, getState) => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })    
        }).catch(err => console.log(err))
}

// DELETE_LEAD
export const delete_lead = (id) => (dispatch) => {
    axios.delete(`api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })    
        }).catch(err => console.log(err))
}
