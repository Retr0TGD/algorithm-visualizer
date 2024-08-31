import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="hamburger" onClick={toggleSidebar}>
                    {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
                </div>
                <h1 className="navbar-title">Algorithm Visualizer</h1>
            </nav>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li>Main</li>
                    <li>Learning</li>
                    <li>Comparison</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;