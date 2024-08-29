import React from 'react';
import './App.css'; // Create this CSS file for styling

const Notification = ({ message, type }) => {
    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    );
};

export default Notification;
