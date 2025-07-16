

import React, { useState } from 'react';
import axios from '../api/axios';

const EditPost = ({ id, title, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSave = async () => {
        if (!newTitle.trim()) return;
        if (!id) {
            setError('ID поста не передан');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.put(`/posts/${id}`, {
                title: newTitle,
            });

            onSave(response.data.title);
        } catch (err) {
            console.error(err);
            setError('Не удалось сохранить изменения');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                disabled={loading}
            />
            <button onClick={handleSave} disabled={loading}>
                {loading ? 'Сохраняю...' : 'Сохранить'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EditPost;
