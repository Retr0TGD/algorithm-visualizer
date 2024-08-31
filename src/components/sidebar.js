import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const checkDisabled = (path) => location.pathname === path;

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
                    <li>
                        <NavLink
                            to="/"
                            exact
                            className={`sidebar-button ${checkDisabled('/') ? 'disabled' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/learning"
                            className={`sidebar-button ${checkDisabled('/learning') ? 'disabled' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Learning
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/comparison"
                            className={`sidebar-button ${checkDisabled('/comparison') ? 'disabled' : ''}`}
                            onClick={toggleSidebar}
                        >
                            Comparison
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
