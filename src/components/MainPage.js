import React, { useState } from 'react';

const MainPage = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');

    const handleAlgorithmChange = (event) => {
        setSelectedAlgorithm(event.target.value);
    };

    return (
        <div className="main-page">
            <div className="button-group">
                <button className="main-button">Randomize</button>
                <div className="dropdown">
                    <select
                        className="main-button"
                        value={selectedAlgorithm}
                        onChange={handleAlgorithmChange}
                    >
                        <option value="" disabled>Select Algorithm</option>
                        <optgroup label="Searching">
                            <option value="linear-search">Linear Search</option>
                            <option value="binary-search">Binary Search</option>
                        </optgroup>
                        <optgroup label="Sorting">
                            <option value="bubble-sort">Bubble Sort</option>
                            <option value="insertion-sort">Insertion Sort</option>
                            <option value="selection-sort">Selection Sort</option>
                        </optgroup>
                    </select>
                </div>
                <button className="main-button">Start</button>
                <button className="main-button">Stop</button>
            </div>
        </div>
    );
};

export default MainPage;
