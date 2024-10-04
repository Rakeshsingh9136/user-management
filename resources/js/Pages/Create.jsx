import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import './styles.css'; // Import the CSS file

const Create = () => {
    const [form, setForm] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/api/users', form, {
            onError: (error) => setErrors(error),
            onFinish: () => setForm({ name: '', email: '' })
        });
    };

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
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default Create;
