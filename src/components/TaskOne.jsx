
import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import ShowPost from './ShowPost';
import axios from '../api/axios';

const TaskOne = () => {
    const [posts, setPosts] = useState([]);

    const onAddPost = async (newPostTitle) => {
        const { data } = await axios.post(`/posts`, { title: newPostTitle });
        setPosts([...posts, data]);
    };

    const onRemovePostById = async (id) => {
        await axios.delete(`/posts/${id}`);
        const updatedPosts = posts.filter(item => item.id !== id);
        setPosts(updatedPosts);
    };

    const onUpdatePostById = (id, newTitle) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, title: newTitle } : post
        );
        setPosts(updatedPosts);
    };

    const fetchPost = async () => {
        const { data } = await axios.get(`/posts`);
        setPosts(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

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
