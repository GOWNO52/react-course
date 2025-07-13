// import { useState } from "react"
// import EditPost from "./EditPost"

// const ShowPost = (props) => {
//     const [editPost, setEditPost] = useState(false)


//     const onDelete = () => {
//         props.onRemovePostById(props.id)
//     }

//     const onEditAction = () => {
//         setEditPost(!editPost)
//     }

//     const onEdit = (newTitle)=>{

//     }

//     return (
//         <div>
//             {editPost
//             ? <EditPost title={props.title} onEdit={onEdit}/>
//             : <span>{props.title}</span>}
//             <button onClick={onDelete}>Delete</button>
//             <button onClick={onEditAction}>Edit</button>

//         </div>

//     )
// }



// export default ShowPost


import React, { useState } from 'react';
import EditPost from './EditPost'; // Убедись, что этот компонент существует

const ShowPost = (props) => {
    const [editPost, setEditPost] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(props.title);

    const onDelete = () => {
        props.onRemovePostById(props.id);
    };

    const onEditAction = () => {
        setEditPost(true); // Переход в режим редактирования
    };

    const onSave = (newTitle) => {
        setCurrentTitle(newTitle); // Обновляем заголовок
        setEditPost(false); // Выход из режима редактирования
        if (props.onUpdatePostById) {
            props.onUpdatePostById(props.id, newTitle); // Обновление данных в родителе
        }
    };

    return (
        <div>
            {editPost ? (
                <EditPost title={currentTitle} onSave={onSave} />
            ) : (
                <span>{currentTitle}</span>
            )}
            <button onClick={onDelete}>Delete</button>
            {!editPost && <button onClick={onEditAction}>Edit</button>}
        </div>
    );
};

export default ShowPost;
