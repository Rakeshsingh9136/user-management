import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import './styles.css'; // Import the CSS file

const Edit = ({ user }) => {
    // Initialize form state with a default value
    const [form, setForm] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});

    // Set form values when user prop changes
    useEffect(() => {
        if (user) {
            setForm({ name: user.name || '', email: user.email || '' });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/api/users/${user.id}`, form, {
            onError: (error) => setErrors(error),
            onFinish: () => setForm({ name: '', email: '' })
        });
    };

    if (!user) {
        return <div>Loading...</div>; // Handle loading state if user is not defined
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Edit;
