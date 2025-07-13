

import { useState} from "react";

const AddPost = (props) => {
    const [newPostTitle, setNewPostTitle] = useState (``);



    const onChangeTitle = (e) => {
        setNewPostTitle(e.target.value)
    };

    const onSubmit = () =>{
        props.onAddPost(newPostTitle)
        setNewPostTitle(``)
    }


    return (
        <>
            <input value={newPostTitle} onChange={onChangeTitle} />
            <button onClick={onSubmit}>submit </button>
        </>
    );
};

export default AddPost