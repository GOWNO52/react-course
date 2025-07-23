import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postsSlice'; 

const Addpost = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const title = formData.get('title');

        if (title.trim()) {
            dispatch(addPost(title)); 
        }

        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Введите заголовок" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Addpost;
