import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import './styles.css'; // Import the CSS file

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the User Management System</h1>
            <div className="button-container">
                <button className="nav-button" onClick={() => Inertia.visit('/create')}>
                    Create User
                </button>
                <button className="nav-button" onClick={() => Inertia.visit('/index')}>
                    View Users
                </button>
                <button className="nav-button" onClick={() => Inertia.visit('/Edit')}>
                    Edit User
                </button>
            </div>
        </div>
    );
}
