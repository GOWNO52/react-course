import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        editingPostId: null,
        editingTitle: '',
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push({
                id: Date.now(),
                title: action.payload,
            });
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        startEditing: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload);
            if (post) {
                state.editingPostId = post.id;
                state.editingTitle = post.title;
            }
        },
        updateEditingTitle: (state, action) => {
            state.editingTitle = action.payload;
        },
        saveEditedPost: (state) => {
            const post = state.posts.find(p => p.id === state.editingPostId);
            if (post && state.editingTitle.trim() !== '') {
                post.title = state.editingTitle.trim();
            }
            state.editingPostId = null;
            state.editingTitle = '';
        },
        cancelEditing: (state) => {
            state.editingPostId = null;
            state.editingTitle = '';
        },
    }
});

export const {
    addPost,
    deletePost,
    startEditing,
    updateEditingTitle,
    saveEditedPost,
    cancelEditing
} = postsSlice.actions;

export default postsSlice.reducer;
