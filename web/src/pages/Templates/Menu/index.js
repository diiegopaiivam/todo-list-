import React from 'react'
import { FaCalendar } from 'react-icons/fa';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href='/todos' className='navbar-brand' >
            <FaCalendar /> TodoApp
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href="/todos" className="nav-link">Todos</a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">About</a>
            </li>
    
        </ul>
        </div>
    </nav>
)