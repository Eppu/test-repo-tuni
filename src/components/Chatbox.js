import React from 'react';
import './Chatbox.css';

const Chatbox = props => (
    <div className="chat-container">
        <ul>
            {
                props.items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </div>
);

export default Chatbox;