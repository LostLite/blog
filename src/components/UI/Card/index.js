import React from 'react';
import './style.css';

export default function index(props) {
    return (
        <div className="card" {...props}>
            {props.children}
        </div>
    )
}
