import React from 'react';

export default function ClientList(props) {
    return (
        <li className="clearfix" key={props.name}>
            {props.name}
            <div className="float-right">
                <span className="btn btn-link">Edit</span>
                <span className="btn btn-link">Delete</span>
            </div>
        </li>
    )
}