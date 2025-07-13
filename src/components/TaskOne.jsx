

import React, { useState } from 'react';
import AddPost from './AddPost'; 
import ShowPost from './ShowPost';

const TaskOne = () => {
    const [posts, setPosts] = useState([{ id: '1', title: 'Hello World' }]);

    const onAddPost = (postTitle) => {
        const newPost = {
            id: Date.now().toString(), 
            title: postTitle
        };
        setPosts([...posts, newPost]);
    };

    const onRemovePostById = (id) => {
        const updatedPosts = posts.filter(item => item.id !== id);
        setPosts(updatedPosts);
    };

    const onUpdatePostById = (id, newTitle) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, title: newTitle } : post
        );
        setPosts(updatedPosts);
    };

    return (
        <>
            <AddPost onAddPost={onAddPost} />
            {posts.map(post => (
                <ShowPost
                    key={post.id}
                    {...post}
                    onRemovePostById={onRemovePostById}
                    onUpdatePostById={onUpdatePostById}
                />
            ))}
        </>
    );
};

export default TaskOne;
