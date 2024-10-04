import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import './styles.css'; // Import the CSS file

const Index = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const deleteUser = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(`/api/users/${id}`);
        }
    };

    return (
        <div className="users-container">
            <h1 className="users-title">Users</h1>
            <button className="add-user-button" onClick={() => Inertia.visit('/users/create')}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <span>{user.name} - {user.email}</span>
                        <div>
                            <button
                                className="user-action-button"
                                onClick={() => Inertia.visit(`/users/edit/${user.id}`)}
                            >
                                Edit
                            </button>
                            <button
                                className="user-action-button delete-button"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
