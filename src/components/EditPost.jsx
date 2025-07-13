

import React, { useState } from 'react';

const EditPost = ({ title, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);

    const handleSave = () => {
        if (newTitle.trim()) {
            onSave(newTitle);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditPost;
