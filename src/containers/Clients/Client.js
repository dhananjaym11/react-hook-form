import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { ADD_CLIENT_FORM_ALL } from '../../store/constants';
import AddClient from '../../components/Clients/AddClient';
import EditClient from '../../components/Clients/EditClient';

export default function ClientContainer(props) {
    const clients = useSelector(state => state.clients);
    const dispatch = useDispatch();
    const id = props.match.params.clientId;

    useEffect(() => {
        if (id) {
            const { formOne, formTwo } = clients[id];
            dispatch({
                type: ADD_CLIENT_FORM_ALL,
                payload: { formOne, formTwo }
            })
        } else {
            dispatch({
                type: ADD_CLIENT_FORM_ALL,
                payload: { formOne: {}, formTwo: {} }
            })
        }
    }, []);

    return (
        <div>
            <h2>Clients profile</h2>
            { id ? <EditClient /> : <AddClient />}
        </div>
    )
}