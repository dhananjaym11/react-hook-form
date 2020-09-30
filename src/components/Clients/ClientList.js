import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientList({ id, name, onDelete }) {
    return (
        <li className="clearfix">
            {name}
            <div className="float-right">
                <Link to={`/client/edit/${id}`} className="btn btn-link">Edit</Link>
                <button onClick={() => onDelete(id)} className="btn btn-link">Delete</button>
            </div>
        </li>
    )
}