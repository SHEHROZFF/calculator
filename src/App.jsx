import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1>Welcome to the App</h1>
            <Link to="/calculator">
                <button className="button">Go to Calculator</button>
            </Link>
        </div>
    );
};

export default App;
