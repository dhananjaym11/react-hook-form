import React from 'react';
import { Link } from 'react-router-dom';

const ClientsContainer = function () {
    const clients = [
        'Paytm', 'Myntra', 'Karvy'
    ]
    return (
        <div>
            <h2>Clients profile</h2>
            <div className="clearfix">
                <Link to="/client/add" className="btn btn-primary float-right">Add</Link>
            </div>
            <div>
                <ul>
                    {clients.map(client => (
                        <li className="clearfix" key={client}>
                            {client}
                            <div className="float-right">
                                <span className="btn btn-link">Edit</span>
                                <span className="btn btn-link">Delete</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ClientsContainer;