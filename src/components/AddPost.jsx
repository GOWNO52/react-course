

import { useState } from "react";

const AddPost = (props) => {
    const [newPostTitle, setNewPostTitle] = useState('');

    const onChangeTitle = (e) => {
        setNewPostTitle(e.target.value);
    };

    const onSubmit = () => {
        if (!newPostTitle.trim()) return;
        props.onAddPost(newPostTitle);
        setNewPostTitle('');
    };

    return (
        <>
            <input value={newPostTitle} onChange={onChangeTitle} />
            <button onClick={onSubmit}>Submit</button>
        </>
    );
};

export default AddPost;
