import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js'
import Leads from './Leads.js'

export default function  Dashboard (){
        return (
            <Fragment>
              <Form />
              <Leads />
            </Fragment>
        )
}
