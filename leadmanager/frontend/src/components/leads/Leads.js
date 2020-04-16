import React, {Component, Fragment} from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types'
import { get_leads, delete_lead } from '../../actions/leads.js'


class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired
    }

    componentDidMount () {
        this.props.get_leads()
    }

    render() {
        return (
            <Fragment>
                <h2>Leads List</h2>
             <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.message}</td>
                      <td> 
                          <button onClick={this.props.delete_lead.bind(this, lead.id)} className='btn btn-danger btn-sm'>Delete</button>
                   </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { get_leads, delete_lead })(Leads)
