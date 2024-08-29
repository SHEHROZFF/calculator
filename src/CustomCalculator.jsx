import React, { useState } from 'react';
import './App.css';
import Notification from './Notification'; // Import the Notification component

const App = () => {
    const [experimentType, setExperimentType] = useState('');
    const [exposureDays, setExposureDays] = useState('');
    const [weight, setWeight] = useState('');
    const [toxicity, setToxicity] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = () => {
        if (!experimentType || !exposureDays || !weight || !toxicity) {
            setNotification({
                message: 'Please fill in all fields before proceeding.',
                type: 'error'
            });
            return;
        }

        let url = '';

        if (experimentType === 'Blood' || experimentType === 'Urine') {
            if (exposureDays >= 1 && exposureDays <= 3) {
                url = 'https://www.testclear.com/1-day-detox-p3.aspx';
            } else if (exposureDays >= 4 && exposureDays <= 6) {
                url = 'https://www.testclear.com/2-Day-Detox-P4.aspx';
            } else if (exposureDays >= 7 && exposureDays <= 9) {
                url = 'https://www.testclear.com/3-day-detox-p9.aspx';
            } else if (exposureDays >= 10 && exposureDays <= 14) {
                url = 'https://www.testclear.com/4-Day-Detox-P10.aspx';
            } else if (exposureDays >= 15 && exposureDays <= 19) {
                url = 'https://www.testclear.com/5-day-detox-p11.aspx';
            } else if (exposureDays >= 20 && exposureDays <= 24) {
                url = 'https://www.testclear.com/7-day-detox-pills-p195.aspx';
            } else if (exposureDays >= 25) {
                url = 'https://www.testclear.com/10-day-detox-program-p101.aspx';
            }
        } else if (experimentType === 'Hair') {
            url = 'https://www.testclear.com/old-style-aloe-toxin-rid-shampoo-p174.aspx';
        }

        if (url) {
            window.location.href = url;
        }
    };

    return (
        <div className="container">
            <h1>DETOXIFICATION CALCULATOR</h1>
            {notification.message && <Notification message={notification.message} type={notification.type} />}
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="toxicity" className="label">What is your toxicity level?</label>
                    <label htmlFor="toxicity" className="label">(Based on 30 Days window)</label>
                    <select
                        id="toxicity"
                        value={toxicity}
                        onChange={(e) => setToxicity(e.target.value)}
                        className="select"
                    >
                        <option value="">Select Toxicity Level</option>
                        <option value="Low">Low (Minimal use)</option>
                        <option value="Moderate">Moderate (Occasional use)</option>
                        <option value="High">High (Regular use)</option>
                        <option value="Very High">Very High (Heavy use)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="experimentType" className="label">What type of experiment are you conducting?</label>
                    <select
                        id="experimentType"
                        value={experimentType}
                        onChange={(e) => setExperimentType(e.target.value)}
                        className="select margin"
                    >
                        <option value="">Select Type</option>
                        <option value="Blood">Blood</option>
                        <option value="Urine">Urine</option>
                        <option value="Hair">Hair</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="weight" className="label">Weight (lbs):</label>
                    <select
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="select"
                    >
                        <option value="">Select Weight</option>
                        <option value="66 to 132">66 to 132 lbs</option>
                        <option value="134 to 176">134 to 176 lbs</option>
                        <option value="178 to 220">178 to 220 lbs</option>
                        <option value="222 to 264">222 to 264 lbs</option>
                        <option value="Over 264">Over 264 lbs</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exposureDays" className="label">Exposure Level (in Days)</label>
                    <select
                        id="exposureDays"
                        value={exposureDays}
                        onChange={(e) => setExposureDays(e.target.value)}
                        className="select"
                    >
                        <option value="">Select Exposure Days</option>
                        <option value="2">BETWEEN 1 to 3 DAYS</option>
                        <option value="5">BETWEEN 4 to 6 DAYS</option>
                        <option value="8">BETWEEN 7 to 9 DAYS</option>
                        <option value="12">BETWEEN 10 to 14 DAYS</option>
                        <option value="17">BETWEEN 15 to 19 DAYS</option>
                        <option value="22">BETWEEN 20 to 24 DAYS</option>
                        <option value="26">MORE THAN 25 DAYS</option>
                    </select>
                </div>
            </div>
            <button onClick={handleSubmit} className="button">CALCULATE MY RECOMMENDED PRODUCT</button>
        </div>
    );
};

export default App;
