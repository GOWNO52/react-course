import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    startEditing,
    updateEditingTitle,
    saveEditedPost,
    cancelEditing,
    deletePost
} from '../store/postsSlice';
import Addpost from './Addpost';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, editingPostId, editingTitle } = useSelector((state) => state.posts);

    return (
        <>
            <h2>Добавить пост</h2>
            <Addpost />

            <h2>Список постов</h2>
            {posts.map((post) => (
                <div key={post.id} style={{ marginBottom: '1rem' }}>
                    {editingPostId === post.id ? (
                        <>
                            <input
                                value={editingTitle}
                                onChange={(e) => dispatch(updateEditingTitle(e.target.value))}
                            />
                            <button onClick={() => dispatch(saveEditedPost())}> Сохранить</button>
                            <button onClick={() => dispatch(cancelEditing())}>Отмена</button>
                        </>
                    ) : (
                        <>
                            <h3>{post.title}</h3>
                            <button onClick={() => dispatch(startEditing(post.id))}> Редактировать</button>
                            <button onClick={() => dispatch(deletePost(post.id))}> Удалить</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default Posts;
