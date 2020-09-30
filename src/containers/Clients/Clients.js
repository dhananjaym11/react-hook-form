import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { UPDATE_CLIENTS } from '../../store/constants';
import ClientList from '../../components/Clients/ClientList';

export default function ClientsContainer() {
    const clients = useSelector(state => state.clients);
    const dispatch = useDispatch();

    const onDelete = (id) => {
        const updatedClients = [...clients.slice(0, id), ...clients.slice(id + 1)]
        dispatch({
            type: UPDATE_CLIENTS,
            payload: updatedClients
        })
    }

    return (
        <div>
            <h2>Clients profile</h2>
            <div className="clearfix">
                <Link to="/client/add" className="btn btn-primary float-right">Add</Link>
            </div>
            <div>
                <ul>
                    {clients.map((client, index) => (
                        <ClientList key={client.name} id={index} name={client.name} onDelete={onDelete} />
                    ))}
                </ul>
            </div>
        </div>
    )
}