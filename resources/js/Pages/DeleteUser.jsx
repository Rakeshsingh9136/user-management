import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const DeleteUser = ({ user }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete user ${user.name}?`)) {
            Inertia.delete(`/api/users/${user.id}`);
        }
    };

    return (
        <div className="delete-user-container">
            <h3>Delete User</h3>
            <p>Are you sure you want to delete {user.name}?</p>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    );
};

export default DeleteUser;
