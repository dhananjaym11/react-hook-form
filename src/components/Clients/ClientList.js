import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientList({ id, name }) {
    return (
        <li className="clearfix">
            {name}
            <div className="float-right">
                <Link to={`/client/edit/${id}`} className="btn btn-link">Edit</Link>
                <span className="btn btn-link">Delete</span>
            </div>
        </li>
    )
}