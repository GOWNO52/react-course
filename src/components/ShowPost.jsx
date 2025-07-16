
import React, { useState } from 'react';
import EditPost from './EditPost';

const ShowPost = (props) => {
    const [editPost, setEditPost] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(props.title);

    const onDelete = () => {
        props.onRemovePostById(props.id);
    };

    const onEditAction = () => {
        setEditPost(true);
    };

    const onSave = (newTitle) => {
        setCurrentTitle(newTitle);
        setEditPost(false);
        if (props.onUpdatePostById) {
            props.onUpdatePostById(props.id, newTitle);
        }
    };

    return (
        <div>
            {editPost ? (
                <EditPost
                    id={props.id}
                    title={currentTitle}
                    onSave={onSave}
                />
            ) : (
                <span>{currentTitle}</span>
            )}
            <button onClick={onDelete}>Delete</button>
            {!editPost && <button onClick={onEditAction}>Edit</button>}
        </div>
    );
};

export default ShowPost;
