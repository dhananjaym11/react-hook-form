import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import ClientList from '../../components/Clients/ClientList';

export default function ClientsContainer() {
    const clients = useSelector(state => state.clients);
    return (
        <div>
            <h2>Clients profile</h2>
            <div className="clearfix">
                <Link to="/client/add" className="btn btn-primary float-right">Add</Link>
            </div>
            <div>
                <ul>
                    {clients.map((client, index) => (
                        <ClientList key={client.name} id={index} name={client.name} />
                    ))}
                </ul>
            </div>
        </div>
    )
}