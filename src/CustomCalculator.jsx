import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [experimentType, setExperimentType] = useState('');
    const [weight, setWeight] = useState('');
    const [exposureDays, setExposureDays] = useState('');

    const handleSubmit = () => {
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
        } else {
            alert('Please select a valid experiment type, weight, and exposure days.');
        }
    };

    return (
        <div className="container">
            <h1>Custom Calculator</h1>

            <div className="form-group">
                <label htmlFor="experimentType" className="label">What type of experiment are you conducting?</label>
                <select
                    id="experimentType"
                    value={experimentType}
                    onChange={(e) => setExperimentType(e.target.value)}
                    className="select"
                >
                    <option value="">Select Type</option>
                    <option value="Blood">Blood</option>
                    <option value="Urine">Urine</option>
                    <option value="Hair">Hair</option>
                </select>
            </div>

            {experimentType === 'Blood' || experimentType === 'Urine' ? (
                <>
                    <div className="form-group">
                        <label htmlFor="weight" className="label">Weight (kg):</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="input"
                            min="1"
                        />
                    </div>
                    {weight && (
                        <div className="form-group">
                            <label htmlFor="exposureDays" className="label">Exposure Days (EXPOSURE LEVEL):</label>
                            <input
                                type="number"
                                id="exposureDays"
                                value={exposureDays}
                                onChange={(e) => setExposureDays(e.target.value)}
                                className="input"
                                min="1"
                            />
                        </div>
                    )}
                </>
            ) : null}

            {experimentType === 'Hair' && (
                <div className="form-group">
                    <label htmlFor="weight" className="label">Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="input"
                        min="1"
                    />
                </div>
            )}

            {(experimentType === 'Blood' || experimentType === 'Urine' || experimentType === 'Hair') && (
                <button onClick={handleSubmit} className="button">Submit</button>
            )}
        </div>
    );
};

export default App;
